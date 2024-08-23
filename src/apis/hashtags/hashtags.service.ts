import { Inject, Injectable } from '@nestjs/common';
import { CreateHashtagDto } from './dto/create-hashtag.dto';
import { UpdateHashtagDto } from './dto/update-hashtag.dto';
import { CustomPrismaService } from 'nestjs-prisma';
import { ExtendedPrismaClient } from '../../prisma.extension';

@Injectable()
export class HashtagsService {
  constructor(
    @Inject('PrismaService')
    private prismaService: CustomPrismaService<ExtendedPrismaClient>,
  ) {}

  create(createHashtagDto: CreateHashtagDto) {
    return 'This action adds a new hashtag';
  }

  findAll() {
    return `This action returns all hashtags`;
  }

  async getTrends() {
    const top10 = await this.prismaService.client.hashtag.findMany({
      take: 10, // take : 반환할 최대 레코드 수 지정 (일반적으로 페이징에 사용됨)
      include: {
        // include : 관계된 테이블의 필드를 가져올 때 사용, 관계된 엔티티의 데이터도 가져올 수 있음
        // 여기선 _count가 관계된 엔티티(post)의 데이터
        _count: {
          select: {
            Posts: true,
          },
        },
      },
      orderBy: {
        // orderBy : 필드의 정렬 기준 지정 (내림차순 / 올림차순등)
        Posts: {
          _count: 'desc',
        },
      },
    });
    console.log(top10);
    return top10.map((v) => ({
      title: v.title,
      count: v._count.Posts,
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} hashtag`;
  }

  update(id: number, updateHashtagDto: UpdateHashtagDto) {
    return `This action updates a #${id} hashtag`;
  }

  remove(id: number) {
    return `This action removes a #${id} hashtag`;
  }
}
