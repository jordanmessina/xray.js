xray.js
=======

See a page layout like an xray, a simple browser bookmarklet.

Install
-------

Simply drag this link to your bookmarks: [X-Ray](javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3B%24('body%20*').filter(function()%20%7Breturn%20%24(this).css('display')%20%3D%3D%3D%20'none'%3B%7D).remove()%3Bvar%20divies%20%3D%20%24('body%20*')%3Bvar%20doc_frag%20%3D%20document.createDocumentFragment()%3Bdivies.each(function()%20%7Bvar%20offset%20%3D%20%24(this).offset()%3Bvar%20px_top%20%3D%20offset.top%3Bvar%20px_left%20%3D%20offset.left%3Bvar%20px_width%20%3D%20%24(this).outerWidth()%3Bvar%20px_height%20%3D%20%24(this).outerHeight()%3Bvar%20depth%20%3D%20%24(this).parents().length%3Bvar%20%24e%20%3D%20%24('%3Cdiv%3E%3C%2Fdiv%3E').css(%7Bposition%3A%20'absolute'%2Ctop%3A%20px_top%2Cleft%3A%20px_left%2Cwidth%3A%20px_width%2Cheight%3A%20px_height%2Cbackground%3A%20'blue'%2Copacity%3A%20.15%2FMath.log(depth)%2Cdisplay%3A%20'none'%7D).addClass('feature-finder-overlay')%3Bdoc_frag.appendChild(%24e%5B0%5D)%3B%7D)%3B%24('body').empty()%3B%24('body').css('background'%2C%20'none')%3B%24('body').append(doc_frag)%3B%24('.feature-finder-overlay').each(%20function(i)%20%7Bvar%20elem%20%3D%20this%3BsetTimeout(function()%20%7B%24(elem).show()%3B%7D%2C%20(10000%2Fdivies.length)%20*%20i)%3BsetTimeout(function()%20%7B%7D%2C%20(10000%2Fdivies.length)%20*%20(i%2B1))%3B%7D)%7D)(jQuery.noConflict(true))%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.7.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)())
