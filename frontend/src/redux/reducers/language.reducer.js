import photo1 from '../../public/Avatar1.png'
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

const initialState = {
    from: "UA",
    UA: {
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
            "1": [
                {
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
            "2": [
                {
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
            "3": [
                {
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
            "13": [
                {
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
            "14": [
                {
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
            "15": [
                {
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
        }
    },
    EN: {
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
            "1": [
                {
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
            "2": [
                {
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
            "3": [
                {
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
            "13": [
                {
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
            "14": [
                {
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
            "15": [
                {
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
    }
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