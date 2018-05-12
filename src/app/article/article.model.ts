export class Article {
    votes:number;
    title:string;
    link:string;

    constructor(title:string, link:string, votes?:number) { // ?선택적 매개 변수
        this.votes = votes||0;
        this.title = title;
        this.link = link;
    }

    voteUp():void {
        this.votes += 1;
    }

    voteDown():void {
        this.votes -= 1;
    }

    domain():string {
        try {
            const domainAndPath:string = this.link.split("//")[1];
            return domainAndPath.split("/")[0];
        } catch(err) {
            return null;
        }
    }
}
