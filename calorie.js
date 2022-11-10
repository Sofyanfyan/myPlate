function hitungKalori(form){
    let kalori = 0
    if (form.gender === 'male'){
        kalori = (10 * form.bb) + (6.25 * form.tinggi) - (5 * form.umur) + 5
    } else if (form.gender === 'female') {
        kalori = (10 * form.bb) + (6.25 * form.tinggi) - (5 * form.umur) - 161
    }
    if (form.kegiatan === 'sedentary'){
        kalori *= 1.2
    }
    else if (form.kegiatan === 'ligthly active'){
        kalori *= 1.375
    }
    else if (form.kegiatan === 'moderately active'){
        kalori *= 1.55
    }
    else if (form.kegiatan === 'very active'){
        kalori *= 1.725
    }
    else if (form.kegiatan === 'extra active'){
        kalori *= 1.9
    }
    if (form.weight === 'lose weight'){
        kalori -= 500
    }
    if (form.weight === 'gain weight'){
        kalori += 500
    }
    
    return kalori
}

let form = {
    gender: 'female',
    umur: 22,
    tinggi: 156,
    bb: 52,
    bbtarget: 48,
    kegiatan: 'sedentary',
    weight: 'maintain weight'
}
console.log(hitungKalori(form))