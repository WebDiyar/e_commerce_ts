interface IPostList{
    id: number;
    imgUrl: string;
    imgAlt: string;
    title: string;
    date: string;
}

const postList: IPostList[] = [
    {
        id: 1,
        imgUrl: '/src/assets/images/blog/10.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor People Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id: 2,
        imgUrl: '/src/assets/images/blog/11.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id: 3,
        imgUrl: '/src/assets/images/blog/12.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id: 4,
        imgUrl: '/src/assets/images/blog/09.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
]

export default postList;