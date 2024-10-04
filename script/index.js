const phoneInfo = async() => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(url)
    const data = await res.json()
    display(data.data);

}


/**
 * "brand": "Apple ",
"phone_name": "iPhone 13 mini",
"slug": "apple_iphone_13_mini-11104",
"image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
 */
const display = (phones) => {
    const phoneSection = document.getElementById('phone-info-section');

    phones.forEach( phone => {
        const phoneDe = document.createElement('div');
        phoneDe.innerHTML = `
                     <div class="card shadow-2xl flex justify-center items-center border border-solid">
                <div class="bg w-11/12 flex justify-center py-16 m-3 rounded-3xl bg-blue-50">
                    <img src="${phone.image}" alt="">
                </div>
                <p class="text-xl font-bold my-5">${phone.phone_name}</p>
                <p class="w-9/12 mx-auto text-gray-500">There are many variations of passages of available, but the majority have suffered</p>
                <p>Price: $999</p>
                <div class="my-5">
                    <button class="btn bg-blue-500 text-white"> Show Details</button>
                </div>
             </div>
        `
        phoneSection.appendChild(phoneDe)
    });
}



phoneInfo()