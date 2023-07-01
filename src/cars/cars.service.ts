import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { UpdateCarDto, CreateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla',
        // },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find((car) => car.id === id);
        if (!car) throw new NotFoundException(`Car with id '${id} not found'`);

        return car;
    }
    create(CreateCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            brand: CreateCarDto.brand,
            model: CreateCarDto.model,
        };
        this.cars.push(car);
        return car;
    }
    update(id: string, updateCarDto: UpdateCarDto) {
        let carDB = this.findOneById(id);
        this.cars = this.cars.map((car) => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                };
            }
            return car;
        });
        return carDB;
    }
    delete(id: string) {
        const car = this.findOneById(id);
        this.cars = this.cars.filter((car) => car.id !== id);
    }
}
