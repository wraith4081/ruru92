import React from 'react'

import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='w-[90%] mx-auto text-slate-900 font-inter flex flex-col gap-y-4'>
            <div>
                <h1 className='typography-head-title'>Ruru64</h1>
                <h2 className='typography-title'>Ruru64 Nedir?</h2>
                <p className='typography-text'>
                    İlk sürümü <Link to={'https://discord.com/users/614523861429387439'}>okunamayanad#5408</Link> tarafından
                    oluşturulan, bir metin çevirme metotudur. Bu metot, <Link to={'https://discord.com/users/275210427741503499'}>Ruru#0429</Link>'un
                    yaptığı <Link to={'https://en.wikipedia.org/wiki/Alternate_reality_game'}>ARG</Link> sonrasında; ilerdeki ARG'leri içinde kullanılması için geliştirilmiştir.
                    Temel olarak harflerin yerini değiştirerek şifreleme yapar.
                </p>
            </div>
            <div>
                <h1 className='typography-head-title'>Ruru92</h1>
                <h2 className='typography-title'>Ruru64 Nedir?</h2>
                <p className='typography-text'>
                    Ruru64 metotu daha sonra <span>17 Mart 2023</span> tarihinde, <Link to={'https://discord.com/users/523113284853825546'}>Wraith#0001</Link> tarafından bir şifreleme
                    metotunda çevrilmiştir.
                </p>
                <p className='typography-text'>
                    Giriş olarak aldığı metinin sahip olduğu <Link to={'https://en.wikipedia.org/wiki/UTF-8'}>UTF-8</Link> ve <Link to={'https://en.wikipedia.org/wiki/ASCII'}>ASCII</Link> bazlı harflerin, sayısal değerleri üzerinden hesaplama yapar.
                    Daha sonra bu sayısal değerleri bir metin dizesi içindeki konumlarına göre bir sıra sayısı oluşturur ve artan sayıları <span>anahtar</span> adlı değer altında saklar.
                    Artmayan sayısal değerleri ise, metin dizesindeki harflere uyarlıyarak şifreleme yapar.
                    Bu işlemi, metin dizesindeki tüm harfler için tekrarlar ve son olarak anahtar ile şifrelenmiş metni kullanıcıya söyler.
                </p>
                <br />
                <p className='typography-text'>
                    Teknik olarak <span>Ruru64</span>, Base64'ün bir alt hali olarak çıkarılmıştır. Base64 yani Ruru64, bu yüzden bir şifreleme metodu yerine <Link to={'https://en.wikipedia.org/wiki/Binary-to-text_encoding'}>binary-to-text şifreleme</Link> metotudur.<br />
                    Bu metot, <Link to={'https://en.wikipedia.org/wiki/ASCII'}>ASCII</Link> tabanlı metinler için kullanılabilir. Bu yüzden Türkçe karakterlerde sorun yaşanabilir.
                    <br /><br />
                    <span>Ruru92</span> ise, metnin tamamen cözülmesi için şifrelenmiş hali ve cözüm anahtarı gerektiği için <Link to={'https://en.wikipedia.org/wiki/International_Organization_for_Standardization'}>ISO</Link> standartlarına uygun bir şifreleme metotudur.<br />
                    Ayrıca <span>Ruru92</span>, <Link to={'https://en.wikipedia.org/wiki/UTF-8'}>UTF-8</Link> tabanlı metinler için kullanılabilir. Bu yüzden Türkçe karakterlerde sorun yaşanmaz.
                </p>
            </div>
        </div>
    )
}

export default About