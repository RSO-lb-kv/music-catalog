import { Field, Int, ObjectType } from 'type-graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Song {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column('text')
  @Field()
  description: string;

  @Column()
  uploadedBy: string;

  @Column()
  @Field(type => Int)
  lengthInSeconds: number;

  @Column()
  @Field()
  uri: string;

  @Column({ default: 'UPLOADING' })
  status: 'UPLOADING' | 'FINISHED';

  @CreateDateColumn()
  @Field()
  created: Date;
}
