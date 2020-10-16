import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602622016006 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //Faz todas as operações no banco de dados
    await queryRunner.createTable(new Table({
      name:'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true, //Não pode ser negativa
          isPrimary: true,
          isGenerated: true, //Essa coluna vai ser gerada automaticamente
          generationStrategy: 'increment',  
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //desfaz o que foi feito
    await queryRunner.dropTable('orphanages')
  } 

}
