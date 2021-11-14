import { Specification } from "@owensdoug/specification-ts/src/specification";
import { Entity } from "@owensdoug/model-ts/src/entity";

export interface Repository<TEntity extends Entity> {
  get(id: string | number): TEntity;
  get(): Array<TEntity>;
  get(specification: Specification<TEntity>): Array<TEntity>;
  add(entity: TEntity);
  update(entity: TEntity);
  delete(id: string | number);
  count(specification: Specification<TEntity>): number;
}
