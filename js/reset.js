function Exit() {
    this.score = 0;
}

Exit.prototype.init = function(score, parentEle) {

    this.element = document.createElement('p');
    // this.element.setAttribute('id','fromDom')
    this.element = document.createTextNode( "SCORE: " + score);
    this.element = document.createElement('img');
    this.element.setAttribute('src', 'url(' + GAMESTATE[1] +')');
    this.element.style.backgroundRepeat =  'no-repeat';
    this.element.style.position = 'absolute';
    this.element.style.top = CENTERTOP + 'px';
    this.element.style.left = 50 + '%';
    parentEle.appendChild(this.element);   
}

