//import { UpdateBrandDto } from './update-brand.dto';
//import { PartialType } from '@nestjs/mapped-types';
//mport { CreateBrandDto } from './create-brand.dto';

import { IsString, MinLength } from 'class-validator';

//export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto {
    @IsString()
    @MinLength(1)
    name: string;
}
