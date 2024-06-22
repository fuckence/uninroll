const universities = [
    {
        id: 0,
        name: "Maqsut Narikbayev University",
        short_name: "MNU",
        location: 'Astana, Kazakhstan',
        foundation_year: 1994,
        students_number: 6000,
        education_price_year: 1590000,
        credits_per_year: 60,
        education_price_credit: 26500,
        email: 'yucanmor@gmail.com',
        image: 'https://kazguu.kz/wp-content/uploads/2015/11/IMG_1668-----kopiya-1024x683.jpg',
        description: 
        [{
            en: 'MAQSUT NARIKBAYEV UNIVERSITY trains specialists in the field of law, economics, finance, business within the undergraduate, graduate and doctoral programs. There are 4 schools – the KAZGUU School of Liberal Arts, International School of Economics, the MNU Law School and MNU Business School.',
            ru: 'MAQSUT NARIKBAYEV UNIVERSITY ведет подготовку специалистов в области юриспруденции, экономики, финансов, бизнеса в рамках бакалавриата, магистратуры и докторантуры. Здесь функционируют 4 школы — Высшая Гуманитарная Школа, Международная Школа Экономики, Высшая школа права и Бизнес-школа.',
            kz: 'MAQSUT NARIKBAYEV UNIVERSITY бакалавриат, магистратура және докторантура аясында заңтану, экономика, қаржы, бизнес салаларында мамандарды даярлайды. Университетте 4 мектеп қызмет етуде: Жоғары Гуманитарлық Мектебі, Халықаралық Экономика Мектебі, Құқық жоғары мектебі және КАЗГЮУ Бизнес-мектебі.'
        }],
        education_language: 
        [{
            en: ['Russian', 'English'], 
            ru: ['Русский', 'Английский'], 
            kz: ['Орысша', 'Ағылшынша']
        }],
        majors: 
        [{
            en: ['International School of Economics', 'Business, Management and Law', 'Arts and Humanities', 'School of Journalism'], 
            ru: ['Международная школа экономики', 'Бизнес, управление и право','Искусство и гуманитарные науки', 'Школа Журналистики']
        }],
        requirements: [{
            en: [
                'Application addressed to the head of the university',
                'Document on general secondary, technical and vocational, post-secondary or higher education (original)',
                'A copy of the identity document (of the applicant/legal representatives)',
                'Birth certificate (for applicants under 18 years of age)',
                'Photo size 3x4 (electronic)',
                'UNT certificate',
                'Extract from the statement (for applicants to educational programs of higher education that require special and (or) creative training, including in the field of education “Pedagogical Sciences”)',
                'Certificate of award of an educational grant',
                'Documents confirming the preferential right/quota/benefits (for state grant holders)',
                'Medical certificate in form 075/у (original)',
                'Fluorography image (copy)',
                'Form 063 vaccination passport (copy)',
                'Registration certificate for young men (copy)',
                'EDS (electronic digital signature) of the applicant (over 18 years old) or legal representative',
                'Folder – 1 piece; File – 3 pcs'
            ],
            ru: [
                "Заявление на имя руководителя университета",
                "Документ об общем среднем, техническом и профессиональном, послесреднем или высшем образовании (подлинник)",
                "Копия документа, удостоверяющего личность (абитуриента/законных представителей)",
                "Свидетельство о рождении (для абитуриентов до 18 лет)",
                "Фото размером 3x4 (в электронном виде)",
                "Сертификат ЕНТ",
                "Выписка из ведомости (для поступающих по образовательным программам высшего образования, требующим специальной и (или) творческой подготовки, в том числе по области образования 'Педагогические науки')",
                "Свидетельство о присуждении образовательного гранта",
                "Документы, подтверждающие преимущественное право/квоту/льготу (для обладателей государственного гранта)",
                "Медицинская справка по форме 075/у (оригинал)",
                "Снимок флюорографии (копия)",
                "Форма 063 прививочного паспорта (копия)",
                "Приписное свидетельство для юношей (копия)",
                "ЭЦП (электронная цифровая подпись) абитуриента (старше 18 лет)",
                "Скоросшиватель – 1 шт",
                "Файл – 3 шт"
            ]
        }]
    },
    {
        id: 1,
        name: "Eurasian National University",
        short_name: "ENU",
        location: 'Astana, Kazakhstan',
        foundation_year: 1996,
        students_number: 19000,
        education_price_year: 1100000,
        credits_per_year: 60,
        education_price_credit: 19000,
        email: 'yucanmor@gmail.com',
        image: 'https://kazpravda.kz/media/news/2023/03/23/9b26e61a-e3c4-4893-b313-0d7f42938278.jpg',
        description: 
        [{
            en: "Currently, the Eurasian National University is one of the leading classical universities in Kazakhstan. Educational activities at ENU named after. L.N. Gumilev is conducted according to a three-level system of training: bachelor's degree - master's degree - PhD doctoral studies in Russian and Kazakh languages only on a full-time basis, which allows for high quality education.",
            ru: 'В настоящее время Евразийский национальный университет - один из ведущих классических университетов Казахстана. Образовательная деятельность в ЕНУ им. Л.Н. Гумилева ведется по трехуровневой системе подготовки кадров: бакалавриат – магистратура – докторантура PhD на русском и казахском языках только по очной форме, что позволяет обеспечить высокое качество образования. Прием в ЕНУ им. Л.Н. Гумилева осуществляется на основе государственных образовательных грантов и на договорной основе.',
            kz: 'Қазіргі таңда Еуразия ұлттық университеті – Қазақстанның жетекші классикалық жоғары оқу орындарының бірі. Еуразия ұлттық университетінде мамандарды даярлау жүйесі 3 білім беру баспалдағы бойынша: жоғары негізді білім (бакалавриат), магистратура және Ph.D докторантура. Л.Н. Гумилев атындағы ЕҰУ-ге қабылдау мемлекеттік білім гранты мен ақылы негізде жүзеге асырылады.'
        }],
        education_language: 
        [{
            en: ['Russian', 'English'], 
            ru: ['Русский', 'Английский'], 
            kz: ['Орысша', 'Ағылшынша']
        }],
        majors: 
        [{
            en: ['Pedagogical sciences', 'Arts and Humanities', 'Social sciences, Journalism and Information', 'Business, Management and Law', 'Natural Sciences, Mathematics and Statistics', 'Information and Communication Technologies', 'Engineering, Manufacturing and Construction Industries'], 
            ru: ['Педагогические науки', 'Искусство и гуманитарные науки','Социальные науки, журналистика и информация','Бизнес, управление и право', 'Естественные науки, математика и статистика', 'Информационно-коммуникационные технологии', 'Инженерные, обрабатывающие и строительные отрасли']
        }],
        requirements: [{
            en: [
                'Application addressed to the head of the university',
                'Document on general secondary, technical and vocational, post-secondary or higher education (original)',
                'A copy of the identity document (of the applicant/legal representatives)',
                'Birth certificate (for applicants under 18 years of age)',
                'Photo size 3x4 (electronic)',
                'UNT certificate',
                'Extract from the statement (for applicants to educational programs of higher education that require special and (or) creative training, including in the field of education “Pedagogical Sciences”)',
                'Certificate of award of an educational grant',
                'Documents confirming the preferential right/quota/benefits (for state grant holders)',
                'Medical certificate in form 075/у (original)',
                'Fluorography image (copy)',
                'Form 063 vaccination passport (copy)',
                'Registration certificate for young men (copy)',
                'EDS (electronic digital signature) of the applicant (over 18 years old) or legal representative',
                'Folder – 1 piece; File – 3 pcs'
            ],
            ru: [
                "Заявление на имя руководителя университета",
                "Документ об общем среднем, техническом и профессиональном, послесреднем или высшем образовании (подлинник)",
                "Копия документа, удостоверяющего личность (абитуриента/законных представителей)",
                "Свидетельство о рождении (для абитуриентов до 18 лет)",
                "Фото размером 3x4 (в электронном виде)",
                "Сертификат ЕНТ",
                "Выписка из ведомости (для поступающих по образовательным программам высшего образования, требующим специальной и (или) творческой подготовки, в том числе по области образования 'Педагогические науки')",
                "Свидетельство о присуждении образовательного гранта",
                "Документы, подтверждающие преимущественное право/квоту/льготу (для обладателей государственного гранта)",
                "Медицинская справка по форме 075/у (оригинал)",
                "Снимок флюорографии (копия)",
                "Форма 063 прививочного паспорта (копия)",
                "Приписное свидетельство для юношей (копия)",
                "ЭЦП (электронная цифровая подпись) абитуриента (старше 18 лет)",
                "Скоросшиватель – 1 шт",
                "Файл – 3 шт"
            ]
        }]
    },
    {
        id: 2,
        name: "Narxoz University",
        short_name: "Narxoz",
        location: 'Almaty, Kazakhstan',
        foundation_year: 1963,
        students_number: 7281,
        education_price_year: 1625000,
        credits_per_year: 60,
        education_price_credit: 27000,
        email: 'yucanmor@gmail.com',
        image: 'https://static.tildacdn.com/tild6363-3263-4432-b131-656639336531/F1.png',
        description: 
        [{
            en: 'Narxoz University is a university in Almaty, Kazakhstan offering courses in economics, business, finance, and law. The university was founded in 1963 as Almaty Institute of National Economy and received its current name in 2016. The university consists of 3 schools, 5 representative offices in the regions of Kazakhstan, and an economic college.',
            ru: 'Университет Нархоз — частный университет в Казахстане, осуществляющий обучение в области экономики, финансов, менеджмента и бизнеса, информационных технологий, государственного управления и права. Создан в 1963 году, современное название носит с 2016 года. В состав университета входят 5 профессиональных школ по направлениям подготовки, научно-исследовательские центры, научно-образовательные департаменты, колледж. Преподавание ведется на казахском, русском и английском языках.',
            kz: 'Нархоз университеті — Экономика, қаржы, менеджмент пен бизнес, ақпараттық технологиялар, мемлекеттік басқару және құқық саласында оқытуды жүзеге асыратын Қазақстандағы жеке меншік университет. 1963 жылы құрылған, қазіргі атауына 2016 жылдан бері ие. Университет құрамына дайындық бағыттары бойынша 5 кәсіптік мектеп, ғылыми-зерттеу орталықтары, ғылыми-білім беру департаменттері, колледж кіреді. Оқыту қазақ, орыс және ағылшын тілдерінде жүргізіледі.'
        }],
        education_language: 
        [{
            en: ['Russian', 'English', 'Kazakh'], 
            ru: ['Русский', 'Английский', 'Казахский'], 
            kz: ['Орысша', 'Қазақша', 'Ағылшынша']
        }],
        majors: 
        [{
            en: ['Information and Communication Technologies', 'Arts and Humanities', 'International School of Economics', 'Business, Management and Law'], 
            ru: ['Информационно-коммуникационные технологии', 'Искусство и гуманитарные науки','Международная школа экономики','Бизнес, управление и право']
        }],
        requirements: [{
            en: [
                'Application addressed to the head of the university',
                'Document on general secondary, technical and vocational, post-secondary or higher education (original)',
                'A copy of the identity document (of the applicant/legal representatives)',
                'Birth certificate (for applicants under 18 years of age)',
                'Photo size 3x4 (electronic)',
                'UNT certificate',
                'Extract from the statement (for applicants to educational programs of higher education that require special and (or) creative training, including in the field of education “Pedagogical Sciences”)',
                'Certificate of award of an educational grant',
                'Documents confirming the preferential right/quota/benefits (for state grant holders)',
                'Medical certificate in form 075/у (original)',
                'Fluorography image (copy)',
                'Form 063 vaccination passport (copy)',
                'Registration certificate for young men (copy)',
                'EDS (electronic digital signature) of the applicant (over 18 years old) or legal representative',
                'Folder – 1 piece; File – 3 pcs'
            ],
            ru: [
                "Заявление на имя руководителя университета",
                "Документ об общем среднем, техническом и профессиональном, послесреднем или высшем образовании (подлинник)",
                "Копия документа, удостоверяющего личность (абитуриента/законных представителей)",
                "Свидетельство о рождении (для абитуриентов до 18 лет)",
                "Фото размером 3x4 (в электронном виде)",
                "Сертификат ЕНТ",
                "Выписка из ведомости (для поступающих по образовательным программам высшего образования, требующим специальной и (или) творческой подготовки, в том числе по области образования 'Педагогические науки')",
                "Свидетельство о присуждении образовательного гранта",
                "Документы, подтверждающие преимущественное право/квоту/льготу (для обладателей государственного гранта)",
                "Медицинская справка по форме 075/у (оригинал)",
                "Снимок флюорографии (копия)",
                "Форма 063 прививочного паспорта (копия)",
                "Приписное свидетельство для юношей (копия)",
                "ЭЦП (электронная цифровая подпись) абитуриента (старше 18 лет)",
                "Скоросшиватель – 1 шт",
                "Файл – 3 шт"
            ]
        }]
    },
]

export default universities;