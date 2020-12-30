const { fetchJson, fetchText } = require('../tools/fetcher')
const config = require('../config.json')
const moment = require('moment-timezone')
const needle = require('needle')

/**
 * Search for Alkitab.
 * @param {String} query 
 */
const alkitab = (query) => new Promise((resolve, reject) => {
    console.log('Searching for Alkitab info...')
    fetchJson(`https://docs-jojo.herokuapp.com/api/alkitabsearch?q=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search Line sticker.
 */
const linesticker = () => new Promise((resolve, reject) => {
    console.log('Searching for sticker line...')
    fetchJson(`https://api.vhtear.com/newsticker?apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get lyric from title or lyric of the song itself.
 * @param {String} title
 */
const lirik = (title) => new Promise((resolve, reject) => {
    console.log(`Searching lyrics for ${title}...`)
    fetchJson(`https://api.vhtear.com/liriklagu?query=${title}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Wikipedia from given query.
 * @param {String} query
 */
const wiki = (query) => new Promise((resolve, reject) => {
    console.log(`Searching definition for ${query} in Wikipedia...`)
    fetchJson(`https://arugaz.herokuapp.com/api/wiki?q=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Indonesian word definition from KBBI (Kamus Besar Bahasa Indonesia).
 * @param {String} kata
 */
const kbbi = (kata) => new Promise((resolve, reject) => {
    console.log(`Searching definition for ${kata} in KBBI...`)
    fetchJson(`https://api.i-tech.id/tools/kbbi?key=${config.token}&query=${kata}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get latest earthquake info in Indonesia from BMKG (Badan Meteorologi Klimatologi dan Geofisika).
 */
const bmkg = () => new Promise((resolve, reject) => {
    console.log('Getting data from BMKG...')
    fetchJson('https://arugaz.herokuapp.com/api/infogempa')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram account info from username.
 * @param {String} username
 */
const igStalk = (username) => new Promise((resolve, reject) => {
    console.log(`Searching account for ${username}...`)
    fetchJson(`https://arugaz.herokuapp.com/api/stalk?username=${username}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get phone info from GSMArena.
 * @param {String} hp 
 */
const gsmarena = (hp) => new Promise((resolve, reject) => {
    console.log(`Getting phone info for ${hp}...`)
    fetchJson(`https://api.vhtear.com/gsmarena?query=${hp}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get food receipt.
 * @param {String} masakan 
 */
const resep = (masakan) => new Promise((resolve, reject) => {
    console.log(`Getting receipt for ${masakan}...`)
    fetchJson(`https://api.vhtear.com/resepmasakan?query=${masakan}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for WhatsApp sticker.
 * @param {String} query 
 */
const sticker = (query) => new Promise((resolve, reject) => {
    console.log('Searching for sticker...')
    fetchJson(`https://api.vhtear.com/wasticker?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Create distance information.
 * @param {String} kotaAsal
 * @param {String} kotaTujuan
 */
const distance = (kotaAsal, kotaTujuan) => new Promise((resolve, reject) => {
    console.log('Getting data and calculating it...')
    fetchJson(`https://api.vhtear.com/distance?from=${kotaAsal}&to=${kotaTujuan}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get YouTube search results.
 * @param {String} query 
 */
const ytSearch = (query) => new Promise((resolve, reject) => {
    console.log(`Getting YouTube search results for ${query}...`)
    fetchJson(`https://api.vhtear.com/youtube?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get PlayStore search results.
 * @param {String} query 
 */
const playstore = (query) => new Promise((resolve, reject) => {
    console.log(`Fetching PlayStore data for ${query}...`)
    fetchJson(`https://api.vhtear.com/playstore?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Shopee search results.
 * @param {String} query 
 * @param {String} count 
 */
const shopee = (query, count) => new Promise((resolve, reject) => {
    console.log(`Fetching Shopee data for ${query}...`)
    fetchJson(`https://api.vhtear.com/shopee?query=${query}&count=${count}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Show surah list.
 */
const listSurah = () => new Promise((resolve, reject) => {
    console.log('Getting Al-Qur\'an list...')
    fetchJson(`https://api.vhtear.com/quranlist?&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get surah.
 * @param {String} surah 
 */
const getSurah = (surah) => new Promise((resolve, reject) => {
    console.log(`Getting Al-Qur'an surah ${surah}...`)
    fetchJson(`https://api.vhtear.com/quran?no=${surah}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get motivate texts.
 */
const motivasi = () => new Promise((resolve, reject) => {
    console.log('Getting motivates text...')
    fetchText('https://raw.githubusercontent.com/VideFrelan/motivasi/main/motivasi.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Play YT.
 * @param {String} query 
 */
const ytPlay = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for ${q} in YouTube...`)
    fetchJson(`https://api.vhtear.com/ytmp3?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * IP look-up.
 * @param {String} ip 
 */
const whois = (ip) => new Promise((resolve, reject) => {
    console.log(`Look-up IP for ${ip}`)
    fetchJson(`https://api.vhtear.com/ipwhois?ipaddr=${ip}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Create shortlink.
 * @param {String} url
 */
const shortener = (url) => new Promise((resolve, reject) => {
    console.log('Creating shortlink...')
    fetchText(`https://tinyurl.com/api-create.php?url=${url}`)
        .then((text) => resolve(text))
        .catch((err) => reject(err))
})

/**
 * SMS gateway.
 * @param {String} nomor 
 * @param {String} pesan 
 */
const sms = (nomor, pesan) => new Promise((resolve, reject) => {
    console.log(`Sending SMS to ${nomor} with message ${pesan}`)
    fetchJson(`https://api.i-tech.id/special/sms?key=${config.token}&no=${nomor}&msg=${pesan}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get jadwal sholat.
 * @param {String} kota 
 */
const jadwalSholat = (kota) => new Promise((resolve, reject) => {
    const url = 'https://api.banghasan.com/sholat/format/json'
    const kodeKota = new Array()
    const tanggal = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
    console.log(`Getting jadwal sholat for ${kota}...`)
    needle(url + '/kota/nama/' + kota, (err, resp, body) => {
        if (err) throw err
        switch (body.kota.length) {
            case 0:
                reject('Kota tidak ditemukan!')
            break
            default:
                kodeKota.push(body.kota[0]['id'])
                needle(url + '/jadwal/kota/' + kodeKota[0] + '/tanggal/' + tanggal, (err, resp, body) => {
                    if (err) throw err
                    resolve([body.jadwal.data])
                })
            break
        }
    })
})

/**
 * Search for movie.
 * @param {String} query 
 */
const movie = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for Movie ${query}...`)
    fetchJson(`https://api.vhtear.com/downloadfilm?judul=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for Ongkir.
 * @param {String} kurir
 * @param {String} askot
 * @param {String} tukot
 */
const ongkir = (kurir, askot, tukot) => new Promise((resolve, reject) => {
    console.log(`Checking Ongkir...`)
    fetchJson(`https://api.vhtear.com/cekongkir?kurir=${kurir}&fromcity=${askot}&tocity=${tukot}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    lirik,
    wiki,
    kbbi,
    bmkg,
    igStalk,
    gsmarena,
    resep,
    sticker,
    distance,
    ytSearch,
    playstore,
    shopee,
    listSurah,
    getSurah,
    motivasi,
    ytPlay,
    whois,
    shortener,
    sms,
    linesticker,
    jadwalSholat,
    alkitab,
    movie,
    ongkir
}
