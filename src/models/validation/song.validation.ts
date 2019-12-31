import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class VSong {
  @Field()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  uploadedBy: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  imageUrl: string;
}

export class VSongUpdate {
  @IsString()
  uri: string;

  @IsString()
  status: 'UPLOADING' | 'FINISHED';
}
