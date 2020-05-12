import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  type: 'income' | 'outcome';

  @Column('decimal')
  value: number;

  // category_id: string;

  @CreateDateColumn('time with time zone')
  created_at: Date;

  @UpdateDateColumn('time with time zone')
  updated_at: Date;
}

export default Transaction;
