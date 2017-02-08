xquery version "3.0";

module namespace app="http://localhost:8080/exist/apps/examenes/templates";

import module namespace templates="http://exist-db.org/xquery/templates" ;
import module namespace config="http://localhost:8080/exist/apps/examenes/config" at "config.xqm";

(:~
 : This is a sample templating function. It will be called by the templating module if
 : it encounters an HTML element with an attribute data-template="app:test" 
 : or class="app:test" (deprecated). The function has to take at least 2 default
 : parameters. Additional parameters will be mapped to matching request or session parameters.
 : 
 : @param $node the HTML node with the attribute which triggered this call
 : @param $model a map containing arbitrary data - used to pass information between template calls
 :)
declare function app:test($node as node(), $model as map(*)) {
    <div id="satis" align="center">
    <img src="../examenes/satis.png"/>
    </div>
};