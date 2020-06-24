import photo from '../../public/Avatar1.png'
import r36 from '../../public/Rectangle36.png'
import bitmap from '../../public/Bitmap.png'

const face1 = './face1.png'
const face2 = './face2.png'
const face3 = './face3.png'
const face4 = './face4.png'
const ach1 = './sunny-1.png'
const ach2 = './sunny-2.png'
const ach3 = './sunny-3.png'
const ach4 = './sunny-4.png'
const director = './001 (1).jpg'
const nau = './Наугольна.jpg'
const net = './Photo_Net_ZhNN.jpg'
const photo1 = './002.jpg'
const photo2 = './003.jpg'
const photo3 = './005.jpg'
const photo4 = './006.jpg'
const photo5 = './007.jpg'
const photo6 = './008.jpg'
const photo7 = './0010.jpg'
const photo8 = './0011.jpg'
const photo9 = './0012.jpg'
const photo10 = './0013.jpg'
const photo11 = './0016.jpg'
const photo12 = './0017.jpg'
const photo13 = '/0018.jpg'
const photo14 = './0019.jpg'
const photo15 = './0020.jpg'
const fur = './Fursov2.jpg'
const gry = './Gryshenko.jpg'
const kos = './Kosturina.jpg'
const kov = './LRM_EXPORT_199738343304520_20190604_211343484.jpeg'
const kor = './LRM_EXPORT_199997970777411_20190604_211803111.jpeg'
const sal = './LRM_EXPORT_200001587526485_20190604_211806728.jpeg'
const pod = './Poddyakonova.jpg'
const gam = './Gamaliy.jpg'
const tes = '2020-06-11 23.15.30.jpg'

const initialState = {
    from: "UA",
    UA: {
        structurePage: {
            structureHead: 'Структура коледжу',
            adminsHead: 'Адміністрація коледжу',
            heads: 'Завідуючі відділеннями',
            teachersHead: 'Викладачі коледжу',
            admins: {
                mainAdmin: {
                    img: director,
                    fio: 'Луценко Сергій Степанович',
                    pos: 'директор коледжу'
                },
                fAdmin: {
                    img: nau,
                    fio: 'Наугольна',
                    pos: 'заступник директора коледжу'
                },
                sAdmin: {
                    img: net,
                    fio: "Ім'я Прізвище По-батькові",
                    pos: 'заступник директора з чогось'
                },
                tAdmin: {
                    img: gam,
                    fio: "Гамалєй Володимир Васильович",
                    pos: 'заступник директора з адміністративно-господарської роботи'
                }
            },
            chairmans: [{
                    img: director,
                    fio: "Ім'я прізвище по-батькові",
                    pos: 'завідуюча відділенням з ІПЗ'
                },
                {
                    img: director,
                    fio: "Ім'я прізвище по-батькові",
                    pos: 'завідуюча відділенням з ІПЗ'
                }
            ],
            teachers: [{
                    img: photo1,
                    fio: 'Усачьова Світлана Григорівна',
                    pos: 'викладач фізики'
                },
                {
                    img: photo2,
                    fio: 'Одуха Ніна Кузьмівна',
                    pos: 'викладач екології та біології'
                },
                {
                    img: photo3,
                    fio: 'Краснікова Наталя Василівна',
                    pos: 'викладач іноземної мови'
                },
                {
                    img: photo4,
                    fio: 'Клімова Олена Анатоліївна',
                    pos: 'викладач української мови'
                },
                {
                    img: photo5,
                    fio: 'Буділко Антоніна Павлівна',
                    pos: 'викладач дискретної математики'
                },
                {
                    img: photo6,
                    fio: 'Болотських Тетяна Василівна',
                    pos: 'викладач основ метрології і стандартизації'
                },
                {
                    img: photo7,
                    fio: 'Титова Ольга Дмитрівна',
                    pos: 'архітектура комп’ютерних систем'
                },
                {
                    img: photo8,
                    fio: 'Кулік Юлія Вікторівна',
                    pos: 'викладач професійних дисциплін'
                },
                {
                    img: photo9,
                    fio: 'Гордон Наталія Борисівна',
                    pos: "комп’ютерні мережі"
                },
                {
                    img: photo10,
                    fio: 'Мальцева Тетяна Іллівна',
                    pos: 'викладач професійних дисциплін'
                },
                {
                    img: photo11,
                    fio: 'Батирєва Тетяна Іванівана',
                    pos: 'викладач математики та інформатики'
                },
                {
                    img: photo12,
                    fio: 'Колупаєва Олена Юріївна',
                    pos: 'викладач економіки'
                },
                {
                    img: photo13,
                    fio: 'Катасонова Валентина Василівна',
                    pos: 'викладач соціології'
                },
                {
                    img: photo14,
                    fio: 'Дубовик Катерина Михайлівна',
                    pos: 'викладач професійних дисциплін'
                },
                {
                    img: photo15,
                    fio: 'Балабан Василь Павлович',
                    pos: 'викладач історії України та Всесвітньої історії'
                },
                {
                    img: fur,
                    fio: 'Фурсов Анатолій Митрофанович',
                    pos: 'викладач мікропроцесорних систем'
                },
                {
                    img: gry,
                    fio: 'Грищенко Олександр Іванович',
                    pos: 'фізичне виховання'
                },
                {
                    img: kos,
                    fio: 'Костюріна Тетяна Михайлівна',
                    pos: 'викладач теорії ймовірності та вищої математики'
                },
                {
                    img: kov,
                    fio: 'Ковальова Катерина Генадіївна',
                    pos: 'викладач української мови та літератури'
                },
                {
                    img: kor,
                    fio: 'Корнілова Тетяна Іванівна',
                    pos: 'викладач зарубіжної літератури'
                },
                {
                    img: sal,
                    fio: 'Салоїд Тетяна Петрівна',
                    pos: 'викладач математики'
                },
                {
                    img: pod,
                    fio: 'Поддяконова Валентина Григоріївна',
                    pos: 'викладач хімії'
                },
                {
                    img: tes,
                    fio: 'Тресницький Владислав Олександрович',
                    pos: 'викладач інструментів зовнішньо- візуального програмування'
                },
                {
                    img: net,
                    fio: "Прізвище ім'я по-батькові",
                    pos: 'викладач з чогось'
                },
            ]
        },
        historyPage: {
            history: 'Історія коледжу'
        },
        aboutPage: {
            head: 'Про коледж',
            why: 'Чому вступати до ХПКК?',
            whySub: 'Ми переконані, якщо ви оберете навчання саме у Харківському патентно- комп’ютерному коледжі, то ваше сумлінне ставлення до навчання, цілеспрямованість у поєднанні з нашою матеріальною базою та методичним забезпеченням, кадровим педагогічним потенціалом і багаторічним досвідом освітянської діяльності забезпечать вам конкурентоспроможний рівень професійної підготовки і для фахової діяльності, і для продовження навчання. Підтвердженням цьому є відгуки наших випускників.',
            responses: 'Відгуки випускників ХПКК',
            wannaGo: 'Бажаєте вступити до коледжу?',
            wannaText: 'Відвідайте розділ "Абітурієнтам" щоб дізнатися як вступити до коледжу, ознайомитися з правилами прийому та документацією',
            go: 'Перейти'
        },
        mainPage: {
            firstHead: 'Якісна освіта.',
            secondHead: 'Сторічна історія.',
            thirdHead: 'Десятки тисяч фахівців.',
            redBlockThin: '#Абітурієнтам_ХПКК',
            redBlockHead: 'День відкритих дверей',
            redBlockTime: '23 лютого о 17:00',
            redBlockMore: 'Детальніше',
            subHead: 'Світ невпинно рухається у напрямку, коли його нормальне функціонування повністю залежатиме від комп’ютерів. Вже на даний момент ми можемо спостерігати, як кожна галузь нашого персонального та професійного життя пов’язані з інформаційними технологіями. Ми використовуємо смарфони, в яких завантажені соціальні мережі, месенжери, відеочати, додатки доповненої реальності. Банки, лікарні, ресторани, комунальні служби, таксі: все це під’єднане до цифрової системи.Фантастичні фільми стають реальністю, технологій для цього цілком достатньо, а їх повне втілення лише питання часу.',
            eduF: 'Освітні партнери',
            eduS: 'Наші партнери'
        },
        headerPage: {
            header: {
                "Коледж": [{
                        label: 'Головна сторінка',
                        link: '/'
                    },
                    {
                        label: 'Новини',
                        link: '/news'
                    },
                    {
                        label: 'Про коледж',
                        link: '/about'
                    },
                    {
                        label: 'Історія коледжу',
                        link: '/history-of-college'
                    },
                    {
                        label: 'Структура коледжу',
                        link: '/structure'
                    },
                    {
                        label: 'Досягнення',
                        link: '/achievements'
                    },
                    {
                        label: 'Фотогалерея',
                        link: '/galery/1'
                    },
                    {
                        label: 'Працевлаштування',
                        link: '/work'
                    }
                ],
                "Студентам": [{
                        link: "/rating",
                        label: 'Стипендеальний рейтинг'
                    },
                    {
                        link: "/day-schedule",
                        label: 'Розклад занять'
                    },
                    {
                        link: "/replacements",
                        label: 'Заміни'
                    },
                    {
                        link: "/zno",
                        label: 'ЗНО'
                    },
                    {
                        link: "/exam-schedule",
                        label: 'Розклад іспитів'
                    }
                ],
                "Абітурієнтам": [{
                        link: "/open-day",
                        label: 'День відкритих дверей'
                    },
                    {
                        link: "/vstup",
                        label: 'Вступна компанія'
                    },
                    {
                        link: "/specialty",
                        label: 'Спеціальності'
                    },
                    {
                        link: "/contract",
                        label: 'Реквізити для оплати контракту'
                    },
                    {
                        link: "/consultation",
                        label: 'Підготовче відділення'
                    }
                ],
                "Прес-центр": [{
                        link: "",
                        label: 'Професійна кваліфікація'
                    },
                    {
                        link: "/public-info",
                        label: 'Публічна інформація'
                    },
                    {
                        link: "/financial-report",
                        label: 'Фінансовий звіт'
                    },
                    {
                        link: "/rights",
                        label: 'Правова інформація'
                    }
                ]
            },
            headerContacts: {
                link: "/contacts",
                label: 'Контакти'
            },
            headerLogoLetter: 'х',
            headerLogo: 'пкк',
            headerText: 'Харківський патентно-комп\'ютерний коледж',
        },
        footerPage: {
            contactsText: "Контакти",
            telephoneNumberCall: "+380 50 700 48 15",
            telephoneNumber: "+380 50 700 48 15",
            email: "help@compcollege.org",
            street: "Ярослава Мудрого, 18",
            footerIcons: [{
                    src: "",
                    alt: "F"
                },
                {
                    src: "",
                    alt: "T"
                },
                {
                    src: "",
                    alt: "I"
                }
            ],
            footerHFKF: [
                ["#ХКФК", " - це вчитися мріючи"],
                ["#ХКФК", " - це безліч цікавих івентів"],
                ["#ХКФК", " - це незабутні студентські роки"],
                ["#ХКФК", " - це успіх"]
            ]
        },
        responsePage: [{
                text: 'Закінчив в 2012 році за спеціальністю "Обслуговування комп\'ютерних систем і мереж". Вступив в ХАІ на "інженер програмного забезпечення" і з тих пір працюю по "інститутській" спеціальності. Що можу сказати з власного досвіду: ті, хто не хоче вчитися - не навчаться ніде. Ті, хто хочуть вчитися - тих навчать. Тут не вистачить місця, щоб повністю висловитися, але навіть зараз я по роботі періодично торкаюся того матеріалу, якому навчали в коледжі і дуже шкодую, що не приділяв навчанню більше часу',
                img: face2
            },
            {
                text: 'Коледж кращає. Благо, люди, які приходять сюди, намагаються донести студентам істини новіше, ніж ті, які студенти вивчали ще року 3 назад. Навчатися тут нескладно, головне - прагнення до цього. Більшість викладачів хороші фахівці і чудові люди. Коледж дав мені необхідний мінімум. Хороші викладачі, якщо щось не зрозумів пояснять на перерві або після пар. Пояснюють добре. Багато комп\'ютерів, не як в інших коледжах сидять по 3 людини.',
                img: face1
            },
            {
                text: 'Люблю свій рідний ХПКК!  Мені тут подобається абсолютно все, хороша атмосфера, професіні викладачі і зручне місце розташування! Я дуже рада що обрала саме Харківський патентно- комп’ютерний коледж серед всіх інших коледжів Харкова.',
                img: face4
            },
            {
                text: 'ХПКК мені подобається. Випустилась рік тому. Головне влитися в навчальний процес. Тоді все буде: знання, успішність, упевненість в майбутньому. Пари проходять цікаво, професійні викладачі, цікаво спілкуватися з такими людьми. Взагалі все в колледжі классно !!! Якість навчання на гідному рівні, ХПКК рекомендую. Взагалі, все залежить тільки від вас самих: ніхто за вас не буде вивчати матеріал, складати іспити. Всім удачі!',
                img: face3
            },
        ],
        structureModalPage: {
            headMain: {
                img: r36,
                fio: 'Прізвище Ім’я По-батькові',
                rank: 'голова циклової комісії з програмування',
                back: 'Back text'

            },
            default: [{
                    img: r36,
                    fio: 'Прізвище Ім’я По-батькові',
                    rank: 'голова циклової комісії з програмування',
                    back: 'Back text'
                }, {
                    img: r36,
                    fio: 'Прізвище Ім’я По-батькові',
                    rank: 'голова циклової комісії з програмування',
                    back: 'Back text'
                },
                {
                    img: r36,
                    fio: 'Прізвище Ім’я По-батькові',
                    rank: 'голова циклової комісії з програмування',
                    back: 'Back text'
                },
                {
                    img: r36,
                    fio: 'Прізвище Ім’я По-батькові',
                    rank: 'голова циклової комісії з програмування',
                    back: 'Back text'
                },
                {
                    img: r36,
                    fio: 'Прізвище Ім’я По-батькові',
                    rank: 'голова циклової комісії з програмування',
                    back: 'Back text'
                },
                {
                    img: r36,
                    fio: 'Прізвище Ім’я По-батькові',
                    rank: 'голова циклової комісії з програмування',
                    back: 'Back text'
                }
            ]
        },
        coursePage: {
            "121": {
                "1": {
                    "1": "/schedules?course=1&group=1",
                    "2": "/schedules?course=1&group=2",
                    "3": "/schedules?course=1&group=3",
                },
                "2": {
                    "1": "/schedules?course=2&group=1",
                    "2": "/schedules?course=2&group=2",
                    "3": "/schedules?course=2&group=3",
                },
                "3": {
                    "1": "/schedules?course=3&group=1",
                    "2": "/schedules?course=3&group=2",
                    "3": "/schedules?course=3&group=3",
                },
                "4": {
                    "1": "/schedules?course=4&group=1",
                    "2": "/schedules?course=4&group=2",
                    "3": "/schedules?course=4&group=3",
                }
            },
            "123": {
                "1": {
                    "4": "/schedules?course=1&group=4",
                    "5": "/schedules?course=1&group=5",
                },
                "2": {
                    "4": "/schedules?course=2&group=4",
                    "5": "/schedules?course=2&group=5",
                },
                "3": {
                    "4": "/schedules?course=3&group=4",
                    "5": "/schedules?course=3&group=5",
                },
                "4": {
                    "4": "/schedules?course=4&group=4",
                    "5": "/schedules?course=4&group=5",
                }
            }
        },
        zaminyPage: {
            "121": {
                "1": {
                    "1": "/replacementPage?course=1&group=1",
                    "2": "/replacementPage?course=1&group=2",
                    "3": "/replacementPage?course=1&group=3",
                },
                "2": {
                    "1": "/replacementPage?course=2&group=1",
                    "2": "/replacementPage?course=2&group=2",
                    "3": "/replacementPage?course=2&group=3",
                },
                "3": {
                    "1": "/replacementPage?course=3&group=1",
                    "2": "/replacementPage?course=3&group=2",
                    "3": "/replacementPage?course=3&group=3",
                },
                "4": {
                    "1": "/replacementPage?course=4&group=1",
                    "2": "/replacementPage?course=4&group=2",
                    "3": "/replacementPage?course=4&group=3",
                }
            },
            "123": {
                "1": {
                    "4": "/replacementPage?course=1&group=4",
                    "5": "/replacementPage?course=1&group=5",
                },
                "2": {
                    "4": "/replacementPage?course=2&group=4",
                    "5": "/replacementPage?course=2&group=5",
                },
                "3": {
                    "4": "/replacementPage?course=3&group=4",
                    "5": "/replacementPage?course=3&group=5",
                },
                "4": {
                    "4": "/replacementPage?course=4&group=4",
                    "5": "/replacementPage?course=4&group=5",
                }
            }
        },
        unitPage: {
            "1": [{
                    date: '16.03.2020',
                    day: 'Понеділок',
                    schedule: {
                        "1": 'Математика',
                        "2": 'Українська мова'
                    }
                },
                {
                    date: '17.03.2020',
                    day: 'Вівторок',
                    schedule: {}
                },
                {
                    date: '18.03.2020',
                    day: 'Середа',
                    schedule: {
                        "1": 'Українська мова',
                        "2": 'Математика'
                    }
                },
                {
                    date: '19.03.2020',
                    day: 'Четвер',
                    schedule: {}
                },
                {
                    date: '20.03.2020',
                    day: 'П\'ятниця',
                    schedule: {}
                },
                {
                    date: '21.03.2020',
                    day: 'Субота',
                    schedule: {}
                }
            ],
            "2": [{
                    date: '16.03.2020',
                    day: 'Понеділок',
                    schedule: {
                        "1": 'Математика',
                        "2": 'Українська мова'
                    }
                },
                {
                    date: '17.03.2020',
                    day: 'Вівторок',
                    schedule: {}
                },
                {
                    date: '18.03.2020',
                    day: 'Середа',
                    schedule: {
                        "1": 'Українська мова',
                        "2": 'Математика'
                    }
                },
                {
                    date: '19.03.2020',
                    day: 'Четвер',
                    schedule: {}
                },
                {
                    date: '20.03.2020',
                    day: 'П\'ятниця',
                    schedule: {}
                },
                {
                    date: '21.03.2020',
                    day: 'Субота',
                    schedule: {}
                }
            ],
            "3": [{
                    date: '16.03.2020',
                    day: 'Понеділок',
                    schedule: {
                        "1": 'Математика',
                        "2": 'Українська мова'
                    }
                },
                {
                    date: '17.03.2020',
                    day: 'Вівторок',
                    schedule: {}
                },
                {
                    date: '18.03.2020',
                    day: 'Середа',
                    schedule: {
                        "1": 'Українська мова',
                        "2": 'Математика'
                    }
                },
                {
                    date: '19.03.2020',
                    day: 'Четвер',
                    schedule: {}
                },
                {
                    date: '20.03.2020',
                    day: 'П\'ятниця',
                    schedule: {}
                },
                {
                    date: '21.03.2020',
                    day: 'Субота',
                    schedule: {}
                }
            ],
            "13": [{
                    date: '16.03.2020',
                    day: 'Понеділок',
                    schedule: {
                        "1": 'Математика',
                        "2": 'Українська мова'
                    }
                },
                {
                    date: '17.03.2020',
                    day: 'Вівторок',
                    schedule: {}
                },
                {
                    date: '18.03.2020',
                    day: 'Середа',
                    schedule: {
                        "1": 'Українська мова',
                        "2": 'Математика'
                    }
                },
                {
                    date: '19.03.2020',
                    day: 'Четвер',
                    schedule: {}
                },
                {
                    date: '20.03.2020',
                    day: 'П\'ятниця',
                    schedule: {}
                },
                {
                    date: '21.03.2020',
                    day: 'Субота',
                    schedule: {}
                }
            ],
            "14": [{
                    date: '16.03.2020',
                    day: 'Понеділок',
                    schedule: {
                        "1": 'Математика',
                        "2": 'Українська мова'
                    }
                },
                {
                    date: '17.03.2020',
                    day: 'Вівторок',
                    schedule: {}
                },
                {
                    date: '18.03.2020',
                    day: 'Середа',
                    schedule: {
                        "1": 'Українська мова',
                        "2": 'Математика'
                    }
                },
                {
                    date: '19.03.2020',
                    day: 'Четвер',
                    schedule: {}
                },
                {
                    date: '20.03.2020',
                    day: 'П\'ятниця',
                    schedule: {}
                },
                {
                    date: '21.03.2020',
                    day: 'Субота',
                    schedule: {}
                }
            ],
            "15": [{
                    date: '16.03.2020',
                    day: 'Понеділок',
                    schedule: {
                        "1": 'Математика',
                        "2": 'Українська мова'
                    }
                },
                {
                    date: '17.03.2020',
                    day: 'Вівторок',
                    schedule: {}
                },
                {
                    date: '18.03.2020',
                    day: 'Середа',
                    schedule: {
                        "1": 'Українська мова',
                        "2": 'Математика'
                    }
                },
                {
                    date: '19.03.2020',
                    day: 'Четвер',
                    schedule: {}
                },
                {
                    date: '20.03.2020',
                    day: 'П\'ятниця',
                    schedule: {}
                },
                {
                    date: '21.03.2020',
                    day: 'Субота',
                    schedule: {}
                }
            ]
        },
        awardPage: {
            "2019": {
                img1: bitmap,
                img2: bitmap,
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus officia a aperiam reiciendis provident enim. Tenetur rerum reprehenderit deserunt dolorem earum vitae? Ipsum quaerat corrupti voluptates reiciendis corporis cupiditate molestias consectetur quod porro iste architecto, culpa, tempora laborum. In dolorem asperiores excepturi ipsam culpa minus iusto porro accusamus illum voluptates suscipit vitae inventore error facilis, dignissimos corrupti unde! Nesciunt ipsam sapiente aperiam laudantium? Magni corrupti nisi quia natus temporibus in exercitationem veritatis reprehenderit esse? Modi ad repudiandae molestias asperiores non odit incidunt! Error aut, odio officia dignissimos obcaecati, ipsa nam vitae atque qui maiores nostrum ipsam soluta rerum illum.',
                year: 2019
            },
            "2018": {
                img1: bitmap,
                img2: bitmap,
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus officia a aperiam reiciendis provident enim. Tenetur rerum reprehenderit deserunt dolorem earum vitae? Ipsum quaerat corrupti voluptates reiciendis corporis cupiditate molestias consectetur quod porro iste architecto, culpa, tempora laborum. In dolorem asperiores excepturi ipsam culpa minus iusto porro accusamus illum voluptates suscipit vitae inventore error facilis, dignissimos corrupti unde! Nesciunt ipsam sapiente aperiam laudantium? Magni corrupti nisi quia natus temporibus in exercitationem veritatis reprehenderit esse? Modi ad repudiandae molestias asperiores non odit incidunt! Error aut, odio officia dignissimos obcaecati, ipsa nam vitae atque qui maiores nostrum ipsam soluta rerum illum.',
                year: 2018
            },
            "2017": {
                img1: bitmap,
                img2: bitmap,
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus officia a aperiam reiciendis provident enim. Tenetur rerum reprehenderit deserunt dolorem earum vitae? Ipsum quaerat corrupti voluptates reiciendis corporis cupiditate molestias consectetur quod porro iste architecto, culpa, tempora laborum. In dolorem asperiores excepturi ipsam culpa minus iusto porro accusamus illum voluptates suscipit vitae inventore error facilis, dignissimos corrupti unde! Nesciunt ipsam sapiente aperiam laudantium? Magni corrupti nisi quia natus temporibus in exercitationem veritatis reprehenderit esse? Modi ad repudiandae molestias asperiores non odit incidunt! Error aut, odio officia dignissimos obcaecati, ipsa nam vitae atque qui maiores nostrum ipsam soluta rerum illum.',
                year: 2017
            },
            "2016": {
                img1: bitmap,
                img2: bitmap,
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus officia a aperiam reiciendis provident enim. Tenetur rerum reprehenderit deserunt dolorem earum vitae? Ipsum quaerat corrupti voluptates reiciendis corporis cupiditate molestias consectetur quod porro iste architecto, culpa, tempora laborum. In dolorem asperiores excepturi ipsam culpa minus iusto porro accusamus illum voluptates suscipit vitae inventore error facilis, dignissimos corrupti unde! Nesciunt ipsam sapiente aperiam laudantium? Magni corrupti nisi quia natus temporibus in exercitationem veritatis reprehenderit esse? Modi ad repudiandae molestias asperiores non odit incidunt! Error aut, odio officia dignissimos obcaecati, ipsa nam vitae atque qui maiores nostrum ipsam soluta rerum illum.',
                year: 2016
            },
            "2015": {
                img1: bitmap,
                img2: bitmap,
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus officia a aperiam reiciendis provident enim. Tenetur rerum reprehenderit deserunt dolorem earum vitae? Ipsum quaerat corrupti voluptates reiciendis corporis cupiditate molestias consectetur quod porro iste architecto, culpa, tempora laborum. In dolorem asperiores excepturi ipsam culpa minus iusto porro accusamus illum voluptates suscipit vitae inventore error facilis, dignissimos corrupti unde! Nesciunt ipsam sapiente aperiam laudantium? Magni corrupti nisi quia natus temporibus in exercitationem veritatis reprehenderit esse? Modi ad repudiandae molestias asperiores non odit incidunt! Error aut, odio officia dignissimos obcaecati, ipsa nam vitae atque qui maiores nostrum ipsam soluta rerum illum.',
                year: 2015
            }
        },
        achievementsPage: {
            "2017": {
                head: "Участь у Міжнародній олімпіаді з програмування Кубок Вєкуа",
                text: [
                    '<p class="sub-main-text">28-29 жовтня 2017 року студенти коледжу приймали участь у Міжнародній олімпіаді з програмування «Кубок «Вєкуа»».</p>',
                    '<p class="sub-main-text">Олімпіада проводилася в 2 тури: індивідуальний та командний. В олімпіаді приймали участь студенти Вищих навчальних закладів Грузії, України, Білорусі, Азербайджану, Росії. Харківським студентам базову площадку для участі в олімпіаді надав ХНУРЕ.</p>',
                    '<p class="sub-main-text">Студенти патентно-комп’ютерного коледжу приймали участь в обох турах та показали чудові результати.</p>',
                    '<p class="sub-main-text">В індивідуальному турі студенти Дмитро Дородних (гр.П-41), Костянтин Кравчик (гр.П-41), В’ячеслав Коцюба (гр.П-52), Константинов Владислав (гр.П-52), Марина Кудрявцева (гр.П-42) увійшли до сотні кращих.</p>',
                    '<p class="sub-main-text">В командному турі від коледжу приймали участь 4 команди: DeusVult (Кравчик Костянтин, Дородних Дмитро та Радченко Владислава), GoldSun (Коцюба В’ячеслав, Константинов Владислав та Мусієнко Олексій), HPPTeam (Мамедов Тимур, Кудрявцева Марина, Кіяшкін Максим), CyberCloud (Хамідов Далер , Подопригора Данило).</p>',
                    '<p class="sub-main-text">Наші команди DeusVult та GoldSun випередили команди НТУ «ХПІ» та ХНЕУ та всього на дві позиції відстали від команди ХНУРЕ «ZeroDay».</p>',
                    '<p class="sub-main-text">Вітаємо наших учасників!</p>'
                ]
            },
            "2018": {
                head: "ХПКК: перше місце у обласному англомовному брейн-ринзі з комп’ютерних наук",
                text: [
                    "<p class=\"sub-main-text\">1 лютого 2018 р.</p>",
                    "<p class=\"sub-main-text\">Команда Харківського патентно – комп’ютерного коледжу ” Sunny Side” посіла I місце у обласному англомовному брейн-ринзі з комп’ютерних наук. Захід проходив на базі ХРТТ,    у грі приймали участь 10-ть команд від ВНЗ І-ІІ рівнів акредитації.  </p>",
                    "<p class=\"sub-main-text\">Вільне володіння англійською, професійні знання, командна згуртованість, позитивний настрій та віра у власні сили привели до перемоги нашу команду.   </p>",
                    '<p class="sub-main-text">Члени команди</p>',
                    '<p class="sub-main-text">Книш Олексій (П71) капітан команди  </p>',
                    '<p class="sub-main-text">Євтушенко Сергій (П62) </p>',
                    '<p class="sub-main-text">Півень Назар (П71) </p>',
                    '<p class="sub-main-text">Григоров Єгор (П71) </p>',
                    '<p class="sub-main-text">Касумов Богдан (П62) </p>',
                    '<p class="sub-main-text">Анахін Георгій (П62) </p>',
                    '<p class="sub-main-text">У четвертому раунді команда “Sunny Side” виборола право змагатися у фіналі гри. </p>',
                    `<img src=${ach1} alt="ach1" />`,
                    '<p class="sub-main-text">Фінальна гра. Напруження та зосередженість. </p>',
                    `<img src=${ach2} alt="ach2" />`,
                    '<p class="sub-main-text">Нагородження команди. Грамота та солодкі подарунки. </p>',
                    `<img src=${ach3} alt="ach3" />`,
                    '<p class="sub-main-text">Фінальне фото на згадку про приємні та радісні емоції. </p>',
                    `<img src=${ach4} alt="ach4" />`,
                ]
            },
            "2019": {
                head: "Літературно-мовний конкурс імені Тараса Шевченка",
                text: [
                    '<p class="sub-main-text">На базі Харківського патентно-комп’ютерного коледжу пройшов обласний етап X-го міжнародного літературно-мовного конкурсу імені Тараса Шевченка.</p>'
                ]
            }
        },
    },
    EN: {
        structurePage: {
            structureHead: 'Structure of the college',
            adminsHead: 'College administration',
            heads: 'Heads of departments',
            teachersHead: 'College teachers',
            admins: {
                mainAdmin: {
                    img: director,
                    fio: 'Lutsenko Serhiy Stepanovych',
                    pos: 'director of the college'
                },
                fAdmin: {
                    img: nau,
                    fio: "Nauhol'na",
                    pos: 'deputy director of the college'
                },
                sAdmin: {
                    img: net,
                    fio: "Name Surname Patronymic",
                    pos: 'deputy director of something'
                },
                tAdmin: {
                    img: gam,
                    fio: "Hamaliey Volodymyr Vasyliovych",
                    pos: 'deputy director for administrative and economic affairs'
                }
            },
            chairmans: [{
                    img: director,
                    fio: "Name Surname Patronymic",
                    pos: 'deputy director of something'
                },
                {
                    img: director,
                    fio: "Name Surname Patronymic",
                    pos: 'deputy director of something'
                }
            ],
            teachers: [{
                    img: photo1,
                    fio: 'Uschiova Svitlana Hryhorivna',
                    pos: 'physics teacher'
                },
                {
                    img: photo2,
                    fio: 'Odukha Nina Kuzmivna',
                    pos: 'teacher of ecology and biology'
                },
                {
                    img: photo3,
                    fio: 'Krasnikova Natalia Vasylivna',
                    pos: 'foreign language teacher'
                },
                {
                    img: photo4,
                    fio: 'Klimova Elena Anatoliyivna',
                    pos: 'Ukrainian language teacher'
                },
                {
                    img: photo5,
                    fio: 'Budilko Antonina Pavlovna',
                    pos: 'teacher of discrete mathematics'
                },
                {
                    img: photo6,
                    fio: 'Bolotsky Tetyana Vasylivna',
                    pos: 'teacher of basics of metrology and standardization'
                },
                {
                    img: photo7,
                    fio: "Tytova Ol'ha Dmytrivna",
                    pos: 'computer systems architecture'
                },
                {
                    img: photo8,
                    fio: 'Kulik Yuliya Viktorivna',
                    pos: 'teacher of professional disciplines'
                },
                {
                    img: photo9,
                    fio: 'Hordon Natalia Borysivna',
                    pos: "computer networks"
                },
                {
                    img: photo10,
                    fio: "Mal'tseva Tetyana Illivna",
                    pos: 'teacher of professional disciplines'
                },
                {
                    img: photo11,
                    fio: 'Batyreva Tetiana Ivanivna',
                    pos: 'teacher of mathematics and computer science'
                },
                {
                    img: photo12,
                    fio: 'Kolupaeva Elena Yuriyivna',
                    pos: 'teacher of economics'
                },
                {
                    img: photo13,
                    fio: 'Katasonova Valentina Vasylivna',
                    pos: 'teacher of sociology'
                },
                {
                    img: photo14,
                    fio: 'Dubovyk Kateryna Mykhailivna',
                    pos: 'teacher of professional disciplines'
                },
                {
                    img: photo15,
                    fio: 'Balaban Vasil Pavlovich',
                    pos: 'teacher of Ukrainian history and world history'
                },
                {
                    img: fur,
                    fio: 'Fursov Anatoly Mitrofanovich',
                    pos: 'teacher of microprocessor systems'
                },
                {
                    img: gry,
                    fio: 'Grishchenko Olexandr Ivanovych',
                    pos: 'Physical Education'
                },
                {
                    img: kos,
                    fio: 'Kostyurina Tetyana Mykhailivna',
                    pos: 'teacher of probability theory and higher mathematics'
                },
                {
                    img: kov,
                    fio: 'Kovaleva Kateryna Genadiivna',
                    pos: 'teacher of Ukrainian language and literature'
                },
                {
                    img: kor,
                    fio: 'Kornilova Tetyana Ivanivna',
                    pos: 'teacher of foreign literature'
                },
                {
                    img: sal,
                    fio: 'Saloyid Tetiana Petrivna',
                    pos: 'mathematics teacher'
                },
                {
                    img: pod,
                    fio: 'Poddyakonova Valentina Grigorievna',
                    pos: 'chemistry teacher'
                },
                {
                    img: tes,
                    fio: 'Vladislav Oleksandrovych Tresnytsky',
                    pos: 'teacher of external visual programming tools'
                },
                {
                    img: net,
                    fio: "Full Name",
                    pos: 'teacher from something'
                },
            ]
        },
        historyPage: {
            history: 'History of the college'
        },
        aboutPage: {
            head: 'About the college',
            why: 'Why join the KPCC?',
            whySub: 'We are convinced that if you choose to study at Kharkiv Patent and Computer College, then your conscientious attitude to education, purposefulness combined with our material base and methodological support, personnel pedagogical potential and many years of experience in educational activities will provide you with a competitive level of training and for professional activities, and for further study. This is confirmed by the feedback of our graduates.',
            responses: 'Reviews of KPCC graduates',
            wannaGo: 'Want to go to college?',
            wannaText: 'Visit the "Applicants" section to learn how to enter the college, read the rules of admission and documentation',
            go: 'Go'
        },
        mainPage: {
            firstHead: 'Quality education.',
            secondHead: 'Century history.',
            thirdHead: 'Tens of thousands of specialists.',
            redBlockThin: '#To_Appliers_KPCC',
            redBlockHead: 'Open Day',
            redBlockTime: '23 February at 17:00',
            redBlockMore: 'More',
            subHead: 'The world is constantly moving in a direction where its normal functioning will be completely dependent on computers. We can already see how every area of ​​our personal and professional life is related to information technology. We use smartphones, which are loaded with social networks, messengers, video chats, augmented reality applications. Banks, hospitals, restaurants, utilities, taxis: all this is connected to the digital system. Fantastic movies are becoming a reality, technology is enough for this, and their full implementation is only a matter of time.',
            eduF: 'Educational partners',
            eduS: 'Our partners'
        },
        headerPage: {
            header: {
                "College": [{
                        label: 'Main page',
                        link: '/'
                    },
                    {
                        label: 'News',
                        link: '/news/1'
                    },
                    {
                        label: 'About the college',
                        link: '/about'
                    },
                    {
                        label: 'History of the college',
                        link: '/history-of-college'
                    },
                    {
                        label: 'Structure of the college',
                        link: '/structure'
                    },
                    {
                        label: 'Achievements',
                        link: '/achievements'
                    },
                    {
                        label: 'Galery',
                        link: '/galery/1'
                    },
                    {
                        label: 'Employment',
                        link: '/work'
                    },
                ],
                "To students": [{
                        link: "/rating",
                        label: 'Rating'
                    },
                    {
                        link: "/day-schedule",
                        label: 'Day schedule'
                    },
                    {
                        link: "/replacements",
                        label: 'Replacements'
                    },
                    {
                        link: "/zno",
                        label: 'ZNO'
                    },
                    {
                        link: "/exam-schedule",
                        label: 'Exam schedule'
                    }
                ],
                "To applicants": [{
                        link: "/open-day",
                        label: 'Open day'
                    },
                    {
                        link: "/vstup",
                        label: 'Introductory campaign'
                    },
                    {
                        link: "/specialty",
                        label: 'Іpecialty'
                    },
                    {
                        link: "/contract",
                        label: 'Details for contract payment'
                    },
                    {
                        link: "/consultation",
                        label: 'Preparatory department'
                    }
                ],
                "Press center": [{
                        link: "",
                        label: 'Professional qualification'
                    },
                    {
                        link: "/public-info",
                        label: 'Public information'
                    },
                    {
                        link: "/financial-report",
                        label: 'Financial Report'
                    },
                    {
                        link: "/rights",
                        label: 'Legal information'
                    }
                ]
            },
            headerContacts: {
                link: "/contacts",
                label: 'Contacts'
            },
            headerLogoLetter: 'k',
            headerLogo: 'pcc',
            headerText: 'Kharkiv Patent and Computer College'
        },
        responsePage: [{
                text: 'Закінчив в 2012 році за спеціальністю "Обслуговування комп\'ютерних систем і мереж". Вступив в ХАІ на "інженер програмного забезпечення" і з тих пір працюю по "інститутській" спеціальності. Що можу сказати з власного досвіду: ті, хто не хоче вчитися - не навчаться ніде. Ті, хто хочуть вчитися - тих навчать. Тут не вистачить місця, щоб повністю висловитися, але навіть зараз я по роботі періодично торкаюся того матеріалу, якому навчали в коледжі і дуже шкодую, що не приділяв навчанню більше часу',
                img: face2
            },
            {
                text: 'Коледж кращає. Благо, люди, які приходять сюди, намагаються донести студентам істини новіше, ніж ті, які студенти вивчали ще року 3 назад. Навчатися тут нескладно, головне - прагнення до цього. Більшість викладачів хороші фахівці і чудові люди. Коледж дав мені необхідний мінімум. Хороші викладачі, якщо щось не зрозумів пояснять на перерві або після пар. Пояснюють добре. Багато комп\'ютерів, не як в інших коледжах сидять по 3 людини.',
                img: face1
            },
            {
                text: 'Люблю свій рідний ХПКК!  Мені тут подобається абсолютно все, хороша атмосфера, професіні викладачі і зручне місце розташування! Я дуже рада що обрала саме Харківський патентно- комп’ютерний коледж серед всіх інших коледжів Харкова.',
                img: face4
            },
            {
                text: 'ХПКК мені подобається. Випустилась рік тому. Головне влитися в навчальний процес. Тоді все буде: знання, успішність, упевненість в майбутньому. Пари проходять цікаво, професійні викладачі, цікаво спілкуватися з такими людьми. Взагалі все в колледжі классно !!! Якість навчання на гідному рівні, ХПКК рекомендую. Взагалі, все залежить тільки від вас самих: ніхто за вас не буде вивчати матеріал, складати іспити. Всім удачі!',
                img: face3
            },
        ],
        footerPage: {
            contactsText: "Contacts",
            telephoneNumber: "+380 50 700 48 15",
            telephoneNumberCall: "+380 50 700 48 15",
            email: "help@compcollege.org",
            street: "Yaroslava Mudroho, 18",
            footerIcons: [{
                    src: "",
                    alt: "F"
                },
                {
                    src: "",
                    alt: "T"
                },
                {
                    src: "",
                    alt: "I"
                }
            ],
            footerHFKF: [
                ["#ХКФК", " - it is to learn by dreaming"],
                ["#ХКФК", " - it is a lot of interesting events"],
                ["#ХКФК", " - these are unforgettable student years"],
                ["#ХКФК", " - it is a success"]
            ]
        },
        structureModalPage: {
            headMain: {
                img: r36,
                fio: 'Прізвище Ім’я По-батькові',
                rank: 'голова циклової комісії з програмування',
                back: 'Back text'

            },
            default: [{
                    img: r36,
                    fio: 'Прізвище Ім’я По-батькові',
                    rank: 'голова циклової комісії з програмування',
                    back: 'Back text'
                }, {
                    img: r36,
                    fio: 'Прізвище Ім’я По-батькові',
                    rank: 'голова циклової комісії з програмування',
                    back: 'Back text'
                },
                {
                    img: r36,
                    fio: 'Прізвище Ім’я По-батькові',
                    rank: 'голова циклової комісії з програмування',
                    back: 'Back text'
                },
                {
                    img: r36,
                    fio: 'Прізвище Ім’я По-батькові',
                    rank: 'голова циклової комісії з програмування',
                    back: 'Back text'
                },
                {
                    img: r36,
                    fio: 'Прізвище Ім’я По-батькові',
                    rank: 'голова циклової комісії з програмування',
                    back: 'Back text'
                },
                {
                    img: r36,
                    fio: 'Прізвище Ім’я По-батькові',
                    rank: 'голова циклової комісії з програмування',
                    back: 'Back text'
                }
            ]
        },
        coursePage: {
            "121": {
                "1": {
                    "91": 91,
                    "92": 92,
                    "93": 93
                },
                "2": {
                    "91": 91,
                    "92": 92,
                    "93": 93
                },
                "3": {
                    "91": 91,
                    "92": 92,
                    "93": 93
                },
                "4": {
                    "91": 91,
                    "92": 92,
                    "93": 93
                }
            },
            "123": {
                "1": {
                    "91": 91,
                    "92": 92,
                    "93": 93
                },
                "2": {
                    "91": 91,
                    "92": 92,
                    "93": 93
                },
                "3": {
                    "91": 91,
                    "92": 92,
                    "93": 93
                },
                "4": {
                    "91": 91,
                    "92": 92,
                    "93": 93
                }
            }
        },
        unitPage: {
            "1": [{
                    date: '16.03.2020',
                    day: 'Понеділок',
                    schedule: {
                        "1": 'Математика',
                        "2": 'Українська мова'
                    }
                },
                {
                    date: '17.03.2020',
                    day: 'Вівторок',
                    schedule: {}
                },
                {
                    date: '18.03.2020',
                    day: 'Середа',
                    schedule: {
                        "1": 'Українська мова',
                        "2": 'Математика'
                    }
                },
                {
                    date: '19.03.2020',
                    day: 'Четвер',
                    schedule: {}
                },
                {
                    date: '20.03.2020',
                    day: 'П\'ятниця',
                    schedule: {}
                },
                {
                    date: '21.03.2020',
                    day: 'Субота',
                    schedule: {}
                }
            ],
            "2": [{
                    date: '16.03.2020',
                    day: 'Понеділок',
                    schedule: {
                        "1": 'Математика',
                        "2": 'Українська мова'
                    }
                },
                {
                    date: '17.03.2020',
                    day: 'Вівторок',
                    schedule: {}
                },
                {
                    date: '18.03.2020',
                    day: 'Середа',
                    schedule: {
                        "1": 'Українська мова',
                        "2": 'Математика'
                    }
                },
                {
                    date: '19.03.2020',
                    day: 'Четвер',
                    schedule: {}
                },
                {
                    date: '20.03.2020',
                    day: 'П\'ятниця',
                    schedule: {}
                },
                {
                    date: '21.03.2020',
                    day: 'Субота',
                    schedule: {}
                }
            ],
            "3": [{
                    date: '16.03.2020',
                    day: 'Понеділок',
                    schedule: {
                        "1": 'Математика',
                        "2": 'Українська мова'
                    }
                },
                {
                    date: '17.03.2020',
                    day: 'Вівторок',
                    schedule: {}
                },
                {
                    date: '18.03.2020',
                    day: 'Середа',
                    schedule: {
                        "1": 'Українська мова',
                        "2": 'Математика'
                    }
                },
                {
                    date: '19.03.2020',
                    day: 'Четвер',
                    schedule: {}
                },
                {
                    date: '20.03.2020',
                    day: 'П\'ятниця',
                    schedule: {}
                },
                {
                    date: '21.03.2020',
                    day: 'Субота',
                    schedule: {}
                }
            ],
            "13": [{
                    date: '16.03.2020',
                    day: 'Понеділок',
                    schedule: {
                        "1": 'Математика',
                        "2": 'Українська мова'
                    }
                },
                {
                    date: '17.03.2020',
                    day: 'Вівторок',
                    schedule: {}
                },
                {
                    date: '18.03.2020',
                    day: 'Середа',
                    schedule: {
                        "1": 'Українська мова',
                        "2": 'Математика'
                    }
                },
                {
                    date: '19.03.2020',
                    day: 'Четвер',
                    schedule: {}
                },
                {
                    date: '20.03.2020',
                    day: 'П\'ятниця',
                    schedule: {}
                },
                {
                    date: '21.03.2020',
                    day: 'Субота',
                    schedule: {}
                }
            ],
            "14": [{
                    date: '16.03.2020',
                    day: 'Понеділок',
                    schedule: {
                        "1": 'Математика',
                        "2": 'Українська мова'
                    }
                },
                {
                    date: '17.03.2020',
                    day: 'Вівторок',
                    schedule: {}
                },
                {
                    date: '18.03.2020',
                    day: 'Середа',
                    schedule: {
                        "1": 'Українська мова',
                        "2": 'Математика'
                    }
                },
                {
                    date: '19.03.2020',
                    day: 'Четвер',
                    schedule: {}
                },
                {
                    date: '20.03.2020',
                    day: 'П\'ятниця',
                    schedule: {}
                },
                {
                    date: '21.03.2020',
                    day: 'Субота',
                    schedule: {}
                }
            ],
            "15": [{
                    date: '16.03.2020',
                    day: 'Понеділок',
                    schedule: {
                        "1": 'Математика',
                        "2": 'Українська мова'
                    }
                },
                {
                    date: '17.03.2020',
                    day: 'Вівторок',
                    schedule: {}
                },
                {
                    date: '18.03.2020',
                    day: 'Середа',
                    schedule: {
                        "1": 'Українська мова',
                        "2": 'Математика'
                    }
                },
                {
                    date: '19.03.2020',
                    day: 'Четвер',
                    schedule: {}
                },
                {
                    date: '20.03.2020',
                    day: 'П\'ятниця',
                    schedule: {}
                },
                {
                    date: '21.03.2020',
                    day: 'Субота',
                    schedule: {}
                }
            ]
        },
        awardPage: {
            "2019": {
                img1: bitmap,
                img2: bitmap,
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus officia a aperiam reiciendis provident enim. Tenetur rerum reprehenderit deserunt dolorem earum vitae? Ipsum quaerat corrupti voluptates reiciendis corporis cupiditate molestias consectetur quod porro iste architecto, culpa, tempora laborum. In dolorem asperiores excepturi ipsam culpa minus iusto porro accusamus illum voluptates suscipit vitae inventore error facilis, dignissimos corrupti unde! Nesciunt ipsam sapiente aperiam laudantium? Magni corrupti nisi quia natus temporibus in exercitationem veritatis reprehenderit esse? Modi ad repudiandae molestias asperiores non odit incidunt! Error aut, odio officia dignissimos obcaecati, ipsa nam vitae atque qui maiores nostrum ipsam soluta rerum illum.',
                year: 2019
            },
            "2018": {
                img1: bitmap,
                img2: bitmap,
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus officia a aperiam reiciendis provident enim. Tenetur rerum reprehenderit deserunt dolorem earum vitae? Ipsum quaerat corrupti voluptates reiciendis corporis cupiditate molestias consectetur quod porro iste architecto, culpa, tempora laborum. In dolorem asperiores excepturi ipsam culpa minus iusto porro accusamus illum voluptates suscipit vitae inventore error facilis, dignissimos corrupti unde! Nesciunt ipsam sapiente aperiam laudantium? Magni corrupti nisi quia natus temporibus in exercitationem veritatis reprehenderit esse? Modi ad repudiandae molestias asperiores non odit incidunt! Error aut, odio officia dignissimos obcaecati, ipsa nam vitae atque qui maiores nostrum ipsam soluta rerum illum.',
                year: 2018
            },
            "2017": {
                img1: bitmap,
                img2: bitmap,
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus officia a aperiam reiciendis provident enim. Tenetur rerum reprehenderit deserunt dolorem earum vitae? Ipsum quaerat corrupti voluptates reiciendis corporis cupiditate molestias consectetur quod porro iste architecto, culpa, tempora laborum. In dolorem asperiores excepturi ipsam culpa minus iusto porro accusamus illum voluptates suscipit vitae inventore error facilis, dignissimos corrupti unde! Nesciunt ipsam sapiente aperiam laudantium? Magni corrupti nisi quia natus temporibus in exercitationem veritatis reprehenderit esse? Modi ad repudiandae molestias asperiores non odit incidunt! Error aut, odio officia dignissimos obcaecati, ipsa nam vitae atque qui maiores nostrum ipsam soluta rerum illum.',
                year: 2017
            },
            "2016": {
                img1: bitmap,
                img2: bitmap,
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus officia a aperiam reiciendis provident enim. Tenetur rerum reprehenderit deserunt dolorem earum vitae? Ipsum quaerat corrupti voluptates reiciendis corporis cupiditate molestias consectetur quod porro iste architecto, culpa, tempora laborum. In dolorem asperiores excepturi ipsam culpa minus iusto porro accusamus illum voluptates suscipit vitae inventore error facilis, dignissimos corrupti unde! Nesciunt ipsam sapiente aperiam laudantium? Magni corrupti nisi quia natus temporibus in exercitationem veritatis reprehenderit esse? Modi ad repudiandae molestias asperiores non odit incidunt! Error aut, odio officia dignissimos obcaecati, ipsa nam vitae atque qui maiores nostrum ipsam soluta rerum illum.',
                year: 2016
            },
            "2015": {
                img1: bitmap,
                img2: bitmap,
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus officia a aperiam reiciendis provident enim. Tenetur rerum reprehenderit deserunt dolorem earum vitae? Ipsum quaerat corrupti voluptates reiciendis corporis cupiditate molestias consectetur quod porro iste architecto, culpa, tempora laborum. In dolorem asperiores excepturi ipsam culpa minus iusto porro accusamus illum voluptates suscipit vitae inventore error facilis, dignissimos corrupti unde! Nesciunt ipsam sapiente aperiam laudantium? Magni corrupti nisi quia natus temporibus in exercitationem veritatis reprehenderit esse? Modi ad repudiandae molestias asperiores non odit incidunt! Error aut, odio officia dignissimos obcaecati, ipsa nam vitae atque qui maiores nostrum ipsam soluta rerum illum.',
                year: 2015
            }
        }
    },
    achievementsPage: {
        "2017": {
            head: "Участь у Міжнародній олімпіаді з програмування Кубок Вєкуа",
            text: [
                '<p class="sub-main-text">28-29 жовтня 2017 року студенти коледжу приймали участь у Міжнародній олімпіаді з програмування «Кубок «Вєкуа»».</p>',
                '<p class="sub-main-text">Олімпіада проводилася в 2 тури: індивідуальний та командний. В олімпіаді приймали участь студенти Вищих навчальних закладів Грузії, України, Білорусі, Азербайджану, Росії. Харківським студентам базову площадку для участі в олімпіаді надав ХНУРЕ.</p>',
                '<p class="sub-main-text">Студенти патентно-комп’ютерного коледжу приймали участь в обох турах та показали чудові результати.</p>',
                '<p class="sub-main-text">В індивідуальному турі студенти Дмитро Дородних (гр.П-41), Костянтин Кравчик (гр.П-41), В’ячеслав Коцюба (гр.П-52), Константинов Владислав (гр.П-52), Марина Кудрявцева (гр.П-42) увійшли до сотні кращих.</p>',
                '<p class="sub-main-text">В командному турі від коледжу приймали участь 4 команди: DeusVult (Кравчик Костянтин, Дородних Дмитро та Радченко Владислава), GoldSun (Коцюба В’ячеслав, Константинов Владислав та Мусієнко Олексій), HPPTeam (Мамедов Тимур, Кудрявцева Марина, Кіяшкін Максим), CyberCloud (Хамідов Далер , Подопригора Данило).</p>',
                '<p class="sub-main-text">Наші команди DeusVult та GoldSun випередили команди НТУ «ХПІ» та ХНЕУ та всього на дві позиції відстали від команди ХНУРЕ «ZeroDay».</p>',
                '<p class="sub-main-text">Вітаємо наших учасників!</p>'
            ]
        },
        "2018": {
            head: "ХПКК: перше місце у обласному англомовному брейн-ринзі з комп’ютерних наук",
            text: [
                "<p class=\"sub-main-text\">1 лютого 2018 р.</p>",
                "<p class=\"sub-main-text\">Команда Харківського патентно – комп’ютерного коледжу ” Sunny Side” посіла I місце у обласному англомовному брейн-ринзі з комп’ютерних наук. Захід проходив на базі ХРТТ,    у грі приймали участь 10-ть команд від ВНЗ І-ІІ рівнів акредитації.  </p>",
                "<p class=\"sub-main-text\">Вільне володіння англійською, професійні знання, командна згуртованість, позитивний настрій та віра у власні сили привели до перемоги нашу команду.   </p>",
                '<p class="sub-main-text">Члени команди</p>',
                '<p class="sub-main-text">Книш Олексій (П71) капітан команди  </p>',
                '<p class="sub-main-text">Євтушенко Сергій (П62) </p>',
                '<p class="sub-main-text">Півень Назар (П71) </p>',
                '<p class="sub-main-text">Григоров Єгор (П71) </p>',
                '<p class="sub-main-text">Касумов Богдан (П62) </p>',
                '<p class="sub-main-text">Анахін Георгій (П62) </p>',
                '<p class="sub-main-text">У четвертому раунді команда “Sunny Side” виборола право змагатися у фіналі гри. </p>',
                `<img src=${ach1} alt="ach1" />`,
                '<p class="sub-main-text">Фінальна гра. Напруження та зосередженість. </p>',
                `<img src=${ach2} alt="ach2" />`,
                '<p class="sub-main-text">Нагородження команди. Грамота та солодкі подарунки. </p>',
                `<img src=${ach3} alt="ach3" />`,
                '<p class="sub-main-text">Фінальне фото на згадку про приємні та радісні емоції. </p>',
                `<img src=${ach4} alt="ach4" />`,
            ]
        },
        "2019": {
            head: "Літературно-мовний конкурс імені Тараса Шевченка",
            text: [
                '<p class="sub-main-text">На базі Харківського патентно-комп’ютерного коледжу пройшов обласний етап X-го міжнародного літературно-мовного конкурсу імені Тараса Шевченка.</p>'
            ]
        }
    },
}

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE': {
            return {
                ...state,
                from: action.payload
            }
        }
        default:
            return state
    }
}

export default languageReducer;