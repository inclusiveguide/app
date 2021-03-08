import {cogs, home, music, receipt, signOut, store, user} from 'config/icons/fa'

export const adminDashboardMenu = [
    {
        url: '/admin',
        icon: home,
        title: 'Dashboard'
    },
    {
        url: '/admin/shop',
        active: ['product'],
        icon: store,
        title: 'Manage Shop'
    },
    {
        url: '/admin/places',
        active: ['place'],
        icon: user,
        title: 'Manage Places'
    },
    {
        url: '/admin/music',
        active: ['music'],
        icon: music,
        title: 'Manage Music'
    },
    {
        url: '/admin/orders',
        icon: receipt,
        title: 'Manage Orders'
    },
    {
        url: '/admin/taxonomy',
        active: ['product-category'],
        icon: cogs,
        title: 'Manage Taxonomy'
    },
    {
        dispatchAction: 'user/signOut',
        icon: signOut,
        title: 'Sign Out'
    }
]