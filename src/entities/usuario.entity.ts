import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';
import { Fornecedor } from './fornecedor.entity';
import { Lote } from './lote.entity';
import { Preco } from './preco.entity';
import { Estoque } from './estoque.entity';
import { Venda } from './venda.entity';
import { Compra } from './compra.entity';
import { Orcamento } from './orcamento.entity';
import { BaseEntity } from './base.entity';
import { ItensCompra } from './compra-item.entity';

@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @OneToMany(() => Produto, (produto) => produto.usuario)
  produtos: Produto[];

  @OneToMany(() => Fornecedor, (fornecedor) => fornecedor.usuario)
  fornecedores: Fornecedor[];

  @OneToMany(() => Lote, (lote) => lote.usuario)
  lotes: Lote[];

  @OneToMany(() => Preco, (preco) => preco.usuario)
  precos: Preco[];

  @OneToMany(() => Estoque, (estoque) => estoque.usuario)
  estoques: Estoque[];

  @OneToMany(() => Venda, (venda) => venda.usuario)
  vendas: Venda[];

  @OneToMany(() => Compra, (compra) => compra.usuario)
  compras: Compra[];

  @OneToMany(() => Orcamento, (orcamento) => orcamento.usuario)
  orcamentos: Orcamento[];

  @OneToMany(type => ItensCompra, itensCompra => itensCompra.usuario)
  itensCompra: ItensCompra[];
}
