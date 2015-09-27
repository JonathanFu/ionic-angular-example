var sessions = [
    {id:0 , title:"Introduction to Ionic", speaker:"Taylor Swift", icon:"http://ia.media-imdb.com/images/M/MV5BMjA5ODI0NzIzNV5BMl5BanBnXkFtZTcwMzM0NjI2Nw@@._V1._SX140_CR0,0,140,209_.jpg", description: "Taylor Swift is a multi-Grammy award-winning American singer/songwriter who, in 2010 at the age of 20, became the youngest artist in history to win the Grammy Award for Album of the Year. In 2011 Swift was named Billboard's Woman of the Year. She also has been named the American Music Awards Artist of the Year..."},
    {id:1 , title:"AngularJS in 50 Minutes", speaker:"Justin Bieber", icon:"http://ia.media-imdb.com/images/M/MV5BMjE1NjMxMDUyM15BMl5BanBnXkFtZTgwODMzNDM1NTE@._V1._SY209_CR34,0,140,209_.jpg", description: "Canadian Justin Drew Bieber was born in London, Ontario, the son of Pattie Mallette and Jeremy Bieber. Pattie became pregnant when she was 18-years-old, and raised him as a single mother. Justin is of French-Canadian (mother) and German, Irish, Scottish, and English (father) descent. As a child, Bieber showed a strong interest in music..."},
    {id:2 , title:"Contributing to Apache Cordova", speaker:"Miley Cyrus", icon:"http://ia.media-imdb.com/images/M/MV5BMTc3MzE1MzcxNl5BMl5BanBnXkFtZTcwNTM1MTA2OA@@._V1._SY209_CR3,0,140,209_.jpg", description: "Miley Cyrus was born in Franklin, Tennessee, the daughter of country singer Billy Ray Cyrus and his wife, Letitia Jean Tish (Finley). She has 5 siblings - two half-brothers, a half-sister and a younger brother and sister. Her birth name is Destiny Hope, given to her by her parents who hoped she would achieve greatness..."},
    {id:3 , title:"Mobile Performance Techniques", speaker:"Eminem", icon:"http://ia.media-imdb.com/images/M/MV5BMjI0MDAxMDYwOV5BMl5BanBnXkFtZTcwMTQ1MjE2Mw@@._V1._SY209_CR7,0,140,209_.jpg", description: "Eminem was born Marshall Bruce Mathers III in St. Joseph, Missouri, to Deborah R. (Nelson) and Marshall Bruce Mathers, Jr., who were in a band together, Daddy Warbucks. He is of English, as well as some German, Scottish, and Swiss-German, ancestry. Marshall spent his early childhood being shoved back and forth from Kansas City and Detroit..."},
    {id:4 , title:"Building Modular Applications", speaker:"Michael Jackson", icon:"http://ia.media-imdb.com/images/M/MV5BMTM1NjExNjg1OV5BMl5BanBnXkFtZTcwMTQ0NzIwMw@@._V1._SY209_CR1,0,140,209_.jpg", description: "Michael Joseph Jackson was born in Gary, Indiana on August 29, 1958, and entertained audiences nearly his entire life. His father, Joe Jackson, had been a guitarist, but was forced to give up his musical ambitions following his marriage to Katherine Jackson (née Katherine Esther Scruse). Together..."}
];

exports.findAll = function (req, res, next) {
    res.send(sessions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(sessions[id]);
};