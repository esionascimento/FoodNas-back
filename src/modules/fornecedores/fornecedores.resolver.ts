import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetFornecedorArgs } from './dto/get-fornecedor-args';

@Resolver('Fornecedor')
export class FornecedoresResolver {
  constructor() {}

  @Query(() => String)
  async create() {
    return 'Created fornecedores success!';
  }

  @Query(() => String)
  async listAll({ id, nome }: GetFornecedorArgs): Promise<String> {
    return `List All fornecedores ${id} - ${nome}`;
  }

  @Mutation(() => String)
  async update() {
    return 'Updated fornecedor';
  }
}
