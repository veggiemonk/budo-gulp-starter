import domify from 'domify';
import domready from 'domready';
import m from 'mithril';


const Page = {
  list: () => ( m.prop( [
    { url: 'http://github.com', title: 'github' },
    { url: 'http://github.com', title: 'github 2' },
    { url: 'http://gitlab.com', title: 'gitlab' }
  ] ) )
}
const Demo = {
  //controller
  controller: function () {
    var pages = Page.list();
    return {
      pages:  pages,
      rotate: function () {
        pages().push( pages().shift() );
      }
    }
  },

  //view
  view: ( ctrl ) => (
      <div class="myList">
        {
          ctrl.pages().map( ( page ) => ( <a href={ page.url }>{page.title}</a> ) )
        }
        <button onclick={ ctrl.rotate }> "Rotate links"</button>
      </div>
  )
};

domready( () => {
  //initialize
  m.mount( document.getElementById( "app" ), Demo );
} )