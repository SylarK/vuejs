import Counter from './components/Counter.vue'
import Todo from './components/Todo.vue'
import InstantSearch from './components/InstantSearch.vue'
import News from './components/News.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Movies from './components/Movies.vue'
import DragDrop from './components/DragDrop.vue'
import TodoNew from './components/TodoNew.vue'
import Trello from './components/Trello.vue'


export const routes = [
   { path: '', name: 'home', component: Home, titulo: 'Home', menu: false },
   { path: '/counter', name: 'counter', component: Counter, titulo: 'Counter', menu: false },
   { path: '/todo_simple', name: 'todo_simple', component: Todo, titulo: 'Todo', menu: false },
   { path: '/filter_search', name: 'filter_search', component: InstantSearch, titulo: 'Instant Search', menu: false },
   { path: '/news', name: 'news', component: News, titulo: 'News app', menu: false },
   { path: '/login', name: 'login', component: Login, titulo: 'Login', menu: false },
   { path: '/movies', name: 'movies', component: Movies, titulo: 'Movies', menu: false},
   { path: '/dragdrop', name: 'dragdrop', component: DragDrop, titulo: 'Drag Drop', menu: false},
   { path: '/todo_complex', name: 'todo_complex', component: TodoNew, titulo: 'Todo New', menu: false},
   { path: '/trello', name: 'trello', component: Trello, titulo: 'Trello Fake', menu: false},
   { path: '*', component: Home, menu: false}
]