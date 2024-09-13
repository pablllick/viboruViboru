const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        name: 'John',
        lastName: 'Jonovich',
        surname: 'asdf',
        email: 'john@john',
        hashpass: bcrypt.hashSync('123', 10),
        fedDistrict: 'Центральный',
        region: 'Москва',
        municipality: 'Арбат',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane',
        lastName: 'Janovna',
        surname: 'asdf',
        email: 'jane@jane',
        hashpass: bcrypt.hashSync('456', 10),
        fedDistrict: 'Центральный',
        region: 'Москва',
        municipality: 'Таганский',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Peter',
        lastName: 'Petrovich',
        surname: 'asdf',
        email: 'peter@peter',
        hashpass: bcrypt.hashSync('789', 10),
        fedDistrict: 'Северо-Западный',
        region: 'Санкт-Петербург',
        municipality: 'Центральный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Anna',
        lastName: 'Annovna',
        surname: 'asdf',
        email: 'anna@anna',
        hashpass: bcrypt.hashSync('101112', 10),
        fedDistrict: 'Приволжский',
        region: 'Казань',
        municipality: 'Вахитовский',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ivan',
        lastName: 'Ivanovich',
        surname: 'asdf',
        email: 'ivan@ivan',
        hashpass: bcrypt.hashSync('131415', 10),
        fedDistrict: 'Южный',
        region: 'Ростов-на-Дону',
        municipality: 'Пролетарский',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Users', users, {});
    const levels = ['Региональный', 'Федеральный', 'Муниципальный'];
    const inits = [];
    const motivations = [
      'Предложение направлено на развитие региональной инфраструктуры, что улучшит транспортные сети и качество жизни граждан. Экономический эффект будет заметен уже через год.',
      'Проект по созданию образовательных программ для школьников, нацеленных на развитие практических навыков, сделает образование современным и эффективным.',
      'Поддержка малого бизнеса на федеральном уровне поможет создать новые рабочие места и улучшит экономическую ситуацию в стране.',
      'Предлагаю внедрение системы умных городов, которая позволит эффективно управлять ресурсами, снизить энергопотребление и повысить уровень жизни.',
      'Создание национальных парков и охраняемых территорий поможет сохранить биоразнообразие и привлечет туристов, что положительно скажется на экономике региона.',
      'Цифровизация системы здравоохранения позволит улучшить доступность медицинских услуг, снизить затраты и повысить качество жизни граждан.',
      'Создание новых зелёных зон в муниципалитетах улучшит экологическую ситуацию, предоставит места для отдыха и повысит качество жизни.',
      'Программа поддержки молодых семей через субсидии на жильё улучшит демографическую ситуацию и поможет молодым семьям обзавестись собственным жильём.',
      'Предлагаю улучшить подготовку специалистов через региональные образовательные курсы, чтобы повысить конкурентоспособность молодых кадров на рынке труда.',
      'Проект по улучшению системы утилизации отходов позволит снизить нагрузку на окружающую среду и повысить эффективность переработки отходов.',
      'Создание государственной программы поддержки сельского хозяйства обеспечит рост производства и продовольственную безопасность на федеральном уровне.',
      'Муниципальные льготы для бизнеса стимулируют развитие местного предпринимательства и создадут новые рабочие места.',
    ];

    const initiativeNames = [
      'Развитие инфраструктуры',
      'Образовательные программы',
      'Поддержка малого бизнеса',
      'Умные города',
      'Национальные парки',
      'Цифровизация здравоохранения',
      'Зелёные зоны',
      'Субсидии молодым семьям',
      'Образовательные курсы',
      'Утилизация отходов',
      'Поддержка сельского хозяйства',
      'Муниципальные льготы',
    ];

    for (let i = 0; i < 12; i++) {
      inits.push({
        name: initiativeNames[i],
        motivation: motivations[i],
        level: levels[Math.floor(Math.random() * levels.length)],
        dateEnd: new Date(2024, 11, 31),
        authorId: Math.floor(Math.random() * 5) + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Inits', inits, {});
    const userInitVotes = [];
    const totalUsers = 5;
    const totalInits = 12;

    const userInitPairs = new Set();

    while (userInitVotes.length < 30) {
      const userId = Math.floor(Math.random() * totalUsers) + 1;
      const initId = Math.floor(Math.random() * totalInits) + 1;
      const vote = Math.random() < 0.5;

      const pairKey = `${userId}-${initId}`;
      if (!userInitPairs.has(pairKey)) {
        userInitPairs.add(pairKey);
        userInitVotes.push({
          userId,
          initId,
          vote,
        });
      }
    }

    await queryInterface.bulkInsert('UserInits', userInitVotes, {});
  },

  async down(queryInterface, Sequelize) {},
};
