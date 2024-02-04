interface IComprehensiveListItem {
    iconName: string;
    text: string;
    className: string;
    link: string;
    desc: JSX.Element | string;
}

type IAddressListItem = Pick<IComprehensiveListItem, 'iconName' | 'text'>;
type ISocialListItem = Pick<IComprehensiveListItem, 'iconName' | 'className'>
type ItemListItem = Pick<IComprehensiveListItem, 'text' | 'link'>
type IQuickListItem = Pick<IComprehensiveListItem, 'text'>;
type ITweetListItem = Pick<IComprehensiveListItem, 'iconName' | 'desc'>;
type IFooterBottomListItem = Pick<IComprehensiveListItem, 'text'>;

export const addressList: IAddressListItem[] = [
    {
        iconName: 'icofont-google-map',
        text: 'New York, USA.',
    },
    {
        iconName: 'icofont-phone',
        text: '+880 123 456 789',
    },
    {
        iconName: 'icofont-envelope',
        text: 'info@shopcart.com',
    },
]

export const socialList: ISocialListItem[] = [
    {
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        className: 'pinterest',
    },
]

export const ItemList: ItemListItem[] = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '/',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

export const quickList: IQuickListItem[] = [
    {
        text: 'Summer Sessions',
    },
    {
        text: 'Events',
    },
    {
        text: 'Gallery',
    },
    {
        text: 'Forums',
    },
    {
        text: 'Privacy Policy',
    },
    {
        text: 'Terms of Use',
    },
]

export const tweetList: ITweetListItem[] = [
    {
        iconName: 'icofont-twitter',
        desc: `<p>Aminur islam<a href = "#">@ShopCart Greetings!  #HTML_Template < /a> Grab your item, 50% Big Sale Offer !!</p >`
    },
    {
    iconName: 'icofont-twitter',
        desc: `<p>Somrat islam < a href = "#" > @ShopCart Hey! #HTML_Template < /a> Grab your item, 50% Big Sale Offer !!</p >,`
    },
]


export const footerbottomList: IFooterBottomListItem[] = [
    {
        text: 'Faculty',
    },
    {
        text: 'Staff',

    },
    {
        text: 'Students',
    },
    {
        text: 'Alumni',
    },
]