
            var downloads = document.getElementsByTagName('table')[0];
            var newelem = document.createElement('tr');
//image, width, height, appname, applink
//var codes = [
//    'a00' = ['wildandrare.png', '2vw', '2vw', 'Wild West', 'downloads.html'],
 //    'a01' = ['amongusai.png', '2vw', '2vw', 'Among', 'amongusone.html']]
var apps = [
    {
        name: 'Wilder',
        code: 'a00',
        author: 'Google',
        category: 'Games'
    },
        {
        name: 'Wildeeer',
        code: 'a00',
        author: 'Google',
        category: 'Games'
    }
];
    
            newelem.innerHTML = `<td>${apps[0].name}</td>                                                             <td>${apps[0].code}</td>                     <td>${apps[0].author}</td>    <td>${apps[0].category}</td>`;
            downloads.appendChild(newelem)









            newelem.innerHTML = `<td>${apps[1].name}</td>                                                             <td>${apps[1].code}</td>                     <td>${apps[1].author}</td>    <td>${apps[1].category}</td>`;
            downloads.appendChild(newelem)

