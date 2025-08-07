const doc = [
    { 
        text: 'Promo', link: '/doc/promo/',
    },
    {
        text: 'News', link: '/doc/news/'
    }
];


module.exports = {
    lang: 'ru-RU',
    title: 'doc-SSU-EN',
    description: 'Документация для сайта ssu En',
    // logo: '/logo.png',
    themeConfig: {
        nav: [
            {text: 'Главная', link: '/'},
            { text: 'Документация', link: '/doc/'},
            { text: 'Контакты', link: '/contact/'}
        ],
        sidebar: {
            '/doc/': doc,
        },

        outline: { label: 'Содержание страницы' },
        docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
        },
        footer: {
            message: 'Опубликовано под лицензией ???.',
            copyright: '© 2025'
        },

        darkModeSwitchLabel: 'Оформление',
        lightModeSwitchTitle: 'Переключить на светлую тему',
        darkModeSwitchTitle: 'Переключить на тёмную тему',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Вернуться к началу',
        langMenuLabel: 'Изменить язык',
        skipToContentLabel: 'Перейти к содержимому'
    },
}
