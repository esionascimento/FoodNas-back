import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Venda } from './vendas.entity';
import { MeiosPagamento as MeiosPagamento } from './meios_pagamento.entity';

@Entity()
export class VendasMeiosPagamento {
  // @Column({ name: 'id_venda', type: 'int', primary: true })
  // idVenda: number;

  // @Column({ name: 'id_meio_pagamento', type: 'int', primary: true })
  // idMeioPagamento: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;

  @PrimaryColumn()
  public vendaId: string;

  @ManyToOne(() => Venda, (venda) => venda.meiosPagamento)
  @JoinColumn({ name: 'id_venda' })
  venda: Venda;

  @PrimaryColumn()
  public meiosPagamentoId: string;

  @ManyToOne(() => MeiosPagamento, (meiosPagamento) => meiosPagamento.vendas)
  @JoinColumn({ name: 'id_meio_pagamento' })
  meiosPagamento: MeiosPagamento;
}
