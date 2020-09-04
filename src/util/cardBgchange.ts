const compony = (index: any)=>{
    switch (index%8) {
        case 0:
            return { background: 'linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,1))' }
            break;
        case 1:
            return { background: 'linear-gradient(90deg,rgba(146,113,252,1),rgba(248,94,163,1))' }
            break;
        case 2:
            return { background: 'linear-gradient(270deg,rgba(248,198,138,1),rgba(244,91,106,1))' }
            break;
        case 3:
            return { background: 'linear-gradient(90deg,rgba(29,179,150,1),rgba(40,220,212,1))' }
            break;
        case 4:
            return { background: 'linear-gradient(270deg,rgba(248,198,138,1),rgba(244,91,106,1))' }
            break;
        case 5:
            return { background: 'linear-gradient(90deg,rgba(29,179,150,1),rgba(40,220,212,1))' }
            break;
        case 6:
            return { background: 'linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,1))' }
            break;
        case 7:
            return { background: 'linear-gradient(90deg,rgba(146,113,252,1),rgba(248,94,163,1))' }
            break;
    }
}

export{
    compony
}