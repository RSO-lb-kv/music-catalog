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
  @Field()
  uploadedBy: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  uri: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  bpm: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  imageUrl: string;

  @Column({ default: 'UPLOADING' })
  @Field()
  status: 'UPLOADING' | 'FINISHED';

  @CreateDateColumn()
  @Field()
  created: Date;
}
