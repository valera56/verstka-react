
import './components/old-programm/style/global.css'
import headerlogo from "./icons/header-logo.svg"
import serachhader from './icons/search-header.svg'
import menus1 from './icons/menus 1.svg'
import trophy from './icons/trophy (1) 1.svg'
import star from './icons/star 1.svg'
import group from './icons/Group.svg'
import group1 from './icons/Group (1).svg'
import group2 from './icons/Group (2).svg'
import layer from './icons/Layer_1.svg'
import shopping from './icons/shopping-bag 2.svg'
import checklist from './icons/checklist 2.svg'
import stethoscope from './icons/stethoscope 1.svg'
import location from './icons/location 1.svg'
import picture from './icons/picture 1.svg'
import laptop from './images/laptop.svg'
import logoblack from './icons/logo-black.svg'
import whatsapp from './icons/whatsapp (1) 2.svg'
import VK from './icons/vk-social-network-logo 1.svg'
import TG from './icons/telegram 1.svg'
import logodown from './icons/logo-down.svg'

function App() {


  return (
      <div>
          <div className="header">
              <div className="header-block">
                  <div className="header-info">
                      <img src={headerlogo} alt=""/>
                      <button className="header-info-button">
                          <img className="button-icon" src={menus1} alt=""/>
                          <p className="button-text">Все направления</p>
                      </button>
                      <p className="header-info-p">О сервисе</p>
                      <p className="header-info-p">FAQ</p>
                      <p className="header-info-p">Поддержка</p>
                      <p className="header-info-p">Сотрудничество</p>
                      <p className="header-info-p">Контакты</p>
                  </div>
                  <div>
                      <img src={serachhader} alt=""/>
                  </div>
              </div>
              <div className="header-body">

                  <div className="header-body-info">
                      <h1 className="header-body-info-p1">
                          Мы занимаемся рейтингом проверенных компаний
                      </h1>

                      <p className="header-body-info-p2">
                          Инструмент для выбора проверенных компаний в интернете, в разных направлениях бизнеса.
                      </p>
                      <button className="header-body-button">
                          <p className="header-body-button-p">
                              Выбрать направление
                          </p>
                      </button>
                  </div>
                  <div>

                  </div>
              </div>
              <div>

              </div>
          </div>
          <div className="section1">
              <div className="section1-block1">
                  <div className="section1-info1">
                      <div className="section1-icon-block">
                          <img src={trophy} alt=""/>
                      </div>
                      <div className='div-mr-l20'>
                          <p className="section1-p1 section1-text1">
                              5 лет непрерывной работы

                          </p>
                          <p className="section1-p2 section1-text2">
                              Рейтинги публикуются ежегодно, начиная с 2017 года.

                          </p>

                      </div>

                  </div>
                  <div className="section1-info2">
                      <div className="section1-icon-block">
                          <img src={star} alt=""/>
                      </div>
                      <div className='div-mr-l20'>
                          <p className="section1-p1 section1-text3">
                              №1 по популярности в сегменте

                          </p>
                          <p className="section1-p2 section1-text4">
                              Самая высокая посещаемость среди аналогичных площадок.

                          </p>
                      </div>

                  </div>
                  <div className="section1-info3">
                      <div className="section1-icon-block">
                          <img src={group} alt=""/>
                      </div>
                      <div className='div-mr-l20'>
                          <p className="section1-p1 section1-text5">
                              25 основных рейтинга и 1 242 локальных

                          </p>
                          <p className="section1-p2 section1-text6">
                              Детальные срезы по тематикам, типам проектов, бизнесу клиентов и географии.

                          </p>
                      </div>

                  </div>
                  <div className="section1-info4">
                      <div className="section1-icon-block">
                          <img src={group1} alt=""/>
                      </div>
                      <div className='div-mr-l20'>
                          <p className="section1-p1 section1-text7">
                              Понятная и прозрачная методология

                          </p>
                          <p className="section1-p2 section1-text8">
                              Все рейтинги строятся на реальных данных, которые вносят сами компании.
                          </p>
                      </div>

                  </div>
                  <div className="section1-info2">
                      <div className="section1-icon-block">
                          <img src={group2} alt=""/>
                      </div>
                      <div className='div-mr-l20'>
                          <p className="section1-p1 section1-text9">
                              Независимость и не аффилированность

                          </p>
                          <p className="section1-p2 section1-text10">
                              Рейтинговый проект полностью независимый в интернете

                          </p>
                      </div>

                  </div>
                  <div className="section1-info3">
                      <div className="section1-icon-block">
                          <img src={layer} alt=""/>
                      </div>
                      <div className='div-mr-l20'>
                          <p className="section1-p1 section1-text11">
                              Самый большой региональный охват

                          </p>
                          <p className="section1-p2 section1-text12">
                              Участвуют компании из 101 города 5 стран.

                          </p>
                      </div>
                  </div>

              </div>
              <div className="section1-block2">
                  <div className="section1-head">
                      <h1>Популярные направления</h1>
                      <div className="section2-border"></div>
                  </div>

                  <div className="section1-body">
                      <div className="section1-content1">
                          <div className="section1-content1-head">
                              <div className="section1-content1-head-block">
                                  <img className="section1-content1-head-icon" src={shopping} alt=""/>
                              </div>
                              <h2 className="section1-content1-head-h2">Торговля</h2>

                          </div>
                          <div className="section1-content1-body1">
                              <p>Агрегаторы</p>
                              <p>Бытовая техника</p>
                              <p>Двери</p>
                              <p>Дрогери</p>
                              <p>Зоотовары</p>
                              <p>Канцтовары</p>
                              <p>Керамическая плитка</p>
                              <p>Климатическая техника</p>
                          </div>
                      </div>
                      <div className="section1-content1">
                          <div className="section1-content1-head">
                              <div className="section1-content1-head-block">
                                  <img className="section1-content1-head-icon" src={checklist} alt=""/>
                              </div>
                              <h2 className="section1-content1-head-h2">Услуги</h2>

                          </div>
                          <div className="section1-content1-body2">
                              <p>Грузоперевозки и логистика</p>
                              <p>Digital маркетинг</p>
                              <p>Маркетинг и реклама</p>
                              <p>Недвижимость</p>
                              <p>Печать и самопроизводство</p>
                              <p>Ремонт бытовой техники</p>
                              <p>Ремонт автомобилей</p>
                              <p>Юристпруденция</p>
                          </div>
                      </div>
                      <div className="section1-content1">
                          <div className="section1-content1-head">
                              <div className="section1-content1-head-block">
                                  <img className="section1-content1-head-icon" src={stethoscope} alt=""/>
                              </div>
                              <h2 className="section1-content1-head-h2">Здоровье</h2>

                          </div>
                          <div className="section1-content1-body3">
                              <p>Фармацевтика</p>
                              <p>Диетическое питание и фитнес</p>
                              <p>Женское здоровье</p>
                              <p>Мужское здоровье</p>
                              <p>Стоматологические услуги</p>
                              <p>Здоровье детей</p>

                          </div>
                      </div>
                      <div className="section1-content1">
                          <div className="section1-content1-head">
                              <div className="section1-content1-head-block">
                                  <img className="section1-content1-head-icon" src={location} alt=""/>
                              </div>
                              <h2 className="section1-content1-head-h2">Путешествия и туризм</h2>


                          </div>
                          <div className="section1-content1-body4">
                              <p>Авиаперевозки</p>
                              <p>Гостиничный бизнес</p>
                              <p>Наземный транспорт</p>
                              <p>Прокат автомобилей</p>
                              <p>Транспорт и экскурсии</p>
                              <p>Туристические компании</p>

                          </div>
                      </div>
                      <div className="section1-content1">
                          <div className="section1-content1-head">

                              <div className="section1-content1-head-block">
                                  <img className="section1-content1-head-icon" src={picture} alt=""/>
                              </div>
                              <h2 className="section1-content1-head-h2">Искусство</h2>

                          </div>
                          <div className="section1-content1-body5">
                              <p>Анимация и комиксы</p>
                              <p>Визуальное искусство и дизайн</p>
                              <p>Исполнительное искусство</p>
                              <p>Книги и литература</p>
                              <p>Музыка</p>
                              <p>Искусство и развлечения</p>
                              <p>Юмор</p>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="section2">
              <div className="section2-block1">
                  <h1>Главная задача Rangi.ru</h1>
                  <p>помочь Вам найти самое выгодное, удобное и качественное предложение. Не верите? Просто попробуйте
                      наш сервис и не забудьте оставить отзыв о компании!</p>
              </div>
              <div className="section2-block2">
                  <div className="section2-block2-info">
                      <h1>Рейтинг надежных исполнителей</h1>
                      <div className="section2-block2-info-text">
                          <p>Rangi.ru – каталог сервисных центров, объединяющий десятки тысяч компаний во всех городах
                              России.
                              На нашем сайте Вы сможете найти ближайший к дому или офису сервисный центр, узнать время
                              его работы и контакты, просмотреть отзывы и комментарии, а также сориентироваться по
                              стоимости услуг.
                          </p>
                          <p>
                              Наши каталоги обновляются ежедневно, а все отзывы проходят строгую модерацию, чтобы
                              предотвратить «накрутки» рейтинга и недобросовестную конкуренцию.
                          </p>
                          <p>
                              Каталог Rangi.ru разработан специально для жителей городов, в которых так сложно найти
                              порядочный сервисный центр, работающий с нужным типом и брендом оборудования. С нашей
                              помощью Вы сохраните не только деньги, но и драгоценное время – выберите вид техники,
                              нуждающейся в осмотре, тип ремонта, укажите свое местоположение, а наш сайт покажет лучшие
                              сервисные центры вблизи Вас.
                          </p>
                      </div>

                  </div>
                  <img src={laptop} alt=""/>
              </div>
          </div>

          <div className="section3">
              <div className="section3-block1">
                  <div className="section3-block1-info">
                      <h1>Как устроен наш рейтинг</h1>
                      <p>Сервис отзывов и рекомендаций, который помогает людям искать, находить и выбирать лучшие
                          компании.</p>
                  </div>
                  <div className="section3-block2-info">
                      <div className="section3-block2-card">
                          <div className="section3-block2-number">
                              01
                          </div>
                          <h1>
                              Объективность
                          </h1>
                          <p>
                              Наш рейтинг основан на объективных критериях, таких как финансовая стабильность,
                              репутация, инновационность и др. Мы не принимаем во внимание личные предпочтения или
                              предвзятость.
                          </p>
                      </div>
                      <div className="section3-block2-card">
                          <div className="section3-block2-number">
                              02
                          </div>
                          <h1>Надежность</h1>
                          <p>
                              Мы используем надежные и проверенные источники информации для составления рейтинга. Это
                              позволяет пользователям быть уверенными в достоверности предоставленных данных.
                          </p>
                      </div>
                      <div className="section3-block2-card">
                          <div className="section3-block2-number">
                              03
                          </div>
                          <h1>
                              Удобство
                          </h1>
                          <p>
                              Наш рейтинг представлен в удобном и понятном формате, который позволяет легко сравнить
                              компании по различным параметрам. Это помогает пользователям принимать информированные
                              решения при выборе компании.
                          </p>
                      </div>
                      <div className="section3-block2-card">
                          <div className="section3-block2-number">
                              04
                          </div>
                          <h1>
                              Информативность
                          </h1>
                          <p>
                              В нашем рейтинге мы предоставляем подробную информацию о каждой компании, включая историю,
                              условия работы, отзывы клиентов и т.д. Это помогает пользователям получить полное
                              представление о компании перед принятием решения.
                          </p>
                      </div>
                      <div className="section3-block2-card">
                          <div className="section3-block2-number">
                              05
                          </div>
                          <h1>
                              Независимость
                          </h1>
                          <p>
                              Мы не связаны с какой-либо компанией или отраслью, поэтому наш рейтинг является
                              независимым и непредвзятым. Мы стремимся предоставить объективную оценку каждой компании и
                              помочь пользователям сделать правильный выбор.
                          </p>
                      </div>
                      <div className="section3-block2-card">
                          <div className="section3-block2-number">
                              06
                          </div>
                          <h1>
                              Обратная связь
                          </h1>
                          <p>
                              Мы принимаем во внимание мнение пользователей и учитываем их отзывы при составлении
                              рейтинга. Это позволяет нам постоянно улучшать качество предоставляемой информации и
                              удовлетворять потребности наших пользователей.
                          </p>
                      </div>
                  </div>

              </div>
              <div className="section3-block3">
                  <h1>В нашем рейтинги любые сайты — от малых предприятий до глобальных корпораций</h1>
                  <p>Хотите добавить свой сайт? Отправьте заявку.</p>
                  <button>Подробнее о сотрудничестве</button>
              </div>
              <div>
              </div>
          </div>
          <div className="botton">
              <div className="botton-block1">
                  <img src={logoblack} alt=""/>
                  <p>Сайт носит исключительно информационный характер и ни при каких условиях не является публичной
                      офертой, определяемой положениями ч. 2 ст. 437 Гражданского кодекса РФ. Чтобы получить подробную
                      информацию о стоимости услуг, обращайтесь, пожалуйста, к администраторам клиник. «Бест Клиник» -
                      частная клиника и платная поликлиника в Москве, больница стационар.</p>
              </div>
              <div className="body-info">
                  <div className="botton-block1-li">
                      <div className="botton-block1-p">
                          <p>Сервисе</p>
                          <p>Направления</p>
                      </div>
                      <p>Поддержка</p>
                  </div>
                  <div className="botton-border"></div>
                  <div className="botton-block2">
                      <div className="body-info2">
                          <p>
                              О сервисе
                          </p>
                          <p>
                              Вопросы и ответы
                          </p>
                          <p>
                              Контакты
                          </p>
                          <p>Партнеры</p>
                      </div>
                      <div className="body-info3">
                          <p>
                              Азартные игры
                          </p>
                          <p>
                              Потребительские услуги
                          </p>
                          <p>
                              Виды спорта
                          </p>
                          <p>
                              Государство и право
                          </p>
                          <p>
                              Дом и сад
                          </p>
                          <p>
                              Еда и напитки
                          </p>
                          <p>
                              Здоровье
                          </p>
                          <p>
                              Игры
                          </p>
                          <p>
                              Искусство и развлечения
                          </p>
                          <p>
                              Компьютеры, электроника
                          </p>
                          <p>
                              Наука и образование
                          </p>

                      </div>
                      <div className="body-info3">
                          <p>
                              Новости и блоги
                          </p>
                          <p>
                              Образ жизни
                          </p>
                          <p>
                              Питомцы и животные
                          </p>
                          <p>
                              Путешествия и туризм
                          </p>
                          <p>
                              Работа и карьера
                          </p>
                          <p>
                              Сообщество и общество
                          </p>
                          <p>
                              Справочные материалы
                          </p>
                          <p>
                              Транспортные средства
                          </p>
                          <p>
                              Тяжелая промышленность
                          </p>
                          <p>
                              Финансы
                          </p>
                          <p>
                              Хобби и досуг
                          </p>

                      </div>
                      <div className="botton-block3">
                          <p>info@rangi.ru</p>
                          <button>Отправить запрос</button>
                          <h2>Соц сети и мессенджеры</h2>
                          <div className="botton-block-icon">
                              <div>
                                  <img src={whatsapp} alt=""/>
                              </div>

                              <div>
                                  <img src={VK} alt=""/>

                              </div>
                              <div>
                                  <img src={TG} alt=""/>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="down">
              <div className="down-block1">
                  <p>© 2009–2023 Рейтинг сайтов «Rangi».</p>
                  <p>Политика конфиденциальности </p>
              </div>
              <div className="down-block2">
                  <div><p>Сайт построили в</p></div>
                  <div><img src={logodown} alt=""/></div>

              </div>
          </div>
      </div>
  )
}

export default App
