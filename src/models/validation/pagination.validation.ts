import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';

export class VPagination {
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  page: number = 1;

  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  perPage: number = 10;
}
