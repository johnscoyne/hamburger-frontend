import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import Location from '../../core/location';

@Entity({ name: 'location' })
export default class LoationDto implements Location {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  name: string;
}