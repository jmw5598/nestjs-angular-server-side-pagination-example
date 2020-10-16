import {MigrationInterface, QueryRunner, getRepository, Repository} from "typeorm";
import {User} from '../../users/user.entity';
import {MOCK_USERS} from '../seeds/users.seed';


export class SeedUsersTableWithMockData1602869450860 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const usersRepository: Repository<User> = getRepository(User);
        MOCK_USERS.forEach(u => {
            const user: User = usersRepository.create({ ...u });
            usersRepository.save(user);
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("DELECT FROM user WHERE id > 0");
    }

}
