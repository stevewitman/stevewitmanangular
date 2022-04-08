export interface Post {
  slug: string;
  type: string;
  duration?: string;
  title: string;
  url: string;
  description?: string;
  datePosted: string;
  dateSource: string;
  postedBy: string;
  sourceSite: string;
  sourceUrl: string;
  authorName?: string;
  authorUrl?: string;
  speakers?: string[];
  tags?: string[];
}

export interface DailyPosts {
  date: string;
  dailyPosts: Post[];
}

export interface DailyPostsGroup {
  name: string;
  dailyPostGroup: DailyPosts[];
}

/*
 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
|                                                                                 |
|   <DailyPostsGroup>                                                             |
|                                                                                 |
|   'name': ( 'recent', 'month', '2022-03', '2022-02', '2022-01' ),               |
|   'dailyPostsGroup': ( DailyPosts[] )                                           |
|     _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _       | 
|    |                                                                     |      |
|    |   <DailyPosts>                                                      |      | 
|    |                                                                     |      |
|    |   'date': '2022-01-23',                                             |      |
|    |   'dailyPosts': ( Posts[] )                                         |      |
|    |     _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _       |      |
|    |    |                                                         |      |      |
|    |    |   <Post>                                                |      |      |
|    |    |                                                         |      |      |
|    |    |   { "slug": "2022-01-23-A", "type": "blog", ... }       |      |      |
|    |    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|      |      |
|    |     _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _       |      |
|    |    |                                                         |      |      |
|    |    |   <Post>                                                |      |      |
|    |    |                                                         |      |      |
|    |    |   { "slug": "2022-01-23-B", "type": "blog", ... }       |      |      |
|    |    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|      |      |
|    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|      | 
|                                                                                 |
|     _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _       | 
|    |                                                                     |      |
|    |   <DailyPosts>                                                      |      |
|    |                                                                     |      |
|    |   'date': '2022-01-24',                                             |      |
|    |   'dailyPosts': ( Posts[] )                                         |      |
|    |     _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _       |      |
|    |    |                                                         |      |      |
|    |    |   <Post>                                                |      |      |
|    |    |                                                         |      |      |
|    |    |   { "slug": "2022-01-24-A", "type": "blog", ... }       |      |      |
|    |    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|      |      |
|    |     _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _       |      |
|    |    |                                                         |      |      |
|    |    |   <Post>                                                |      |      |
|    |    |                                                         |      |      |
|    |    |   { "slug": "2022-01-24-B", "type": "blog", ... }       |      |      |
|    |    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|      |      |
|    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|      |
|                                                                                 |
|_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _| 

*/
