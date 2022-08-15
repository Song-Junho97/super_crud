import { Controller, Get } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get('/')
    getUsers(): Promise<UserEntity[]> {
        return this.userService.getUsers()
    }
}