export class Hoge {
    private readonly name = 'Hoge';

    public static sayHello() {
        console.log(this.name);
    }
}
