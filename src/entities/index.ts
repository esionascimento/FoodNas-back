import { BaseEntity } from './base.entity';
import { Compras } from './compras.entity';
import { Estoque } from './estoque.entity';
import { Fornecedores } from './fornecedores.entity';
import { ItensCompra } from './itens_compra.entity';
import { ItensOrcamento } from './itens_orcamento.entity';
import { VendaItem } from './itens_venda.entity';
import { Lote } from './lote.entity';
import { MeiosPagamento } from './meios_pagamento.entity';
import { MovimentacoesEstoque } from './movimentacoes_estoque.entity';
import { Orcamento } from './orcamentos.entity';
import { Preco } from './precos.entity';
import { Produto } from './produtos.entity';
import { Usuario } from './usuarios.entity';
import { Venda } from './vendas.entity';
import { VendasMeiosPagamento } from './vendas_meios_pagamento.entity';

const entities = [
  BaseEntity,
  Usuario,
  Fornecedores,
  Produto,
  Compras,
  Estoque,
  ItensCompra,
  ItensOrcamento,
  VendaItem,
  Lote,
  MeiosPagamento,
  MovimentacoesEstoque,
  Orcamento,
  Preco,
  VendasMeiosPagamento,
  Venda,
];

export default entities;
