import 'dotenv/config.js'
import '../../../minga-back/config/database.js'
import { user1,user2,user3,user4,user5,user6,user7,user8,user9,user10 } from './users.js'
import { author1,author2,author3,author4,author5,author6 } from './authors.js'
import { company1,company2,company3,company4 } from './companies.js'
import { categories } from './categories.js'
import { comic1,comic2,comic3,comic4,comic5,comic6,comic7,comic8,comic9,comic10,comic11,comic12,comic13,comic14,comic15,comic16,comic17,comic18,comic19,comic20,comic21,comic22,comic23,comic24,comic25,comic26,comic27,comic28,comic29,comic30,comic31,comic32,comic33 } from './comics.js'
import { User } from '../User.model.js'
import { Author } from '../Author.model.js'
import { Company } from '../Company.model.js'
import { Category } from '../Category.model.js'
import { Comic } from '../Comic.models.js'

let newDoc = async(user,model,dataModel) => {
    let newUser = await User.create(user)
    dataModel.user_id = newUser._id
    let newModel = await model.create(dataModel)
    return newModel._id
}

let newCategories = async(categories) => await Category.insertMany(categories)
newCategories(categories)

let newComic = async(comic,author,company) => {
    let category = await Category.findOne({ name: comic.category_name })
    comic.category_id = category._id
    comic.author_id = author
    if (company) {
        comic.company_id = company
    }
    let newComic = await Comic.create(comic)
    return newComic._id
}

let data = async() => {
    let aut1 = await newDoc(user1,Author,author1)
    let aut2 = await newDoc(user2,Author,author2)
    let aut3 = await newDoc(user3,Author,author3)
    let aut4 = await newDoc(user4,Author,author4)
    let aut5 = await newDoc(user5,Author,author5)
    let aut6 = await newDoc(user6,Author,author6)
    let cia1 = await newDoc(user7,Company,company1)
    let cia2 = await newDoc(user8,Company,company2)
    let cia3 = await newDoc(user9,Company,company3)
    let cia4 = await newDoc(user10,Company,company4)
    
    let ncomic1 = await newComic(comic1,aut1,cia3)
    let ncomic2 = await newComic(comic2,aut2,cia3)
    let ncomic3 = await newComic(comic3,aut3,cia3)
    let ncomic4 = await newComic(comic4,aut4,cia2)
    let ncomic5 = await newComic(comic5,aut5,cia2)
    let ncomic6 = await newComic(comic6,aut6,cia2)
    let ncomic7 = await newComic(comic7,aut1,cia3)
    let ncomic8 = await newComic(comic8,aut2,cia3)
    let ncomic9 = await newComic(comic9,aut3,cia3)
    let ncomic10 = await newComic(comic10,aut4,cia2)
    let ncomic11 = await newComic(comic11,aut5,cia2)
    let ncomic12 = await newComic(comic12,aut6,cia2)
    let ncomic13 = await newComic(comic13,aut1,cia3)
    let ncomic14 = await newComic(comic14,aut2,cia3)
    let ncomic15 = await newComic(comic15,aut3,cia1)
    let ncomic16 = await newComic(comic16,aut4,cia1)
    let ncomic17 = await newComic(comic17,aut5,cia1)
    let ncomic18 = await newComic(comic18,aut6,cia1)
    let ncomic19 = await newComic(comic19,aut1,cia4)
    let ncomic20 = await newComic(comic20,aut2,cia4)
    let ncomic21 = await newComic(comic21,aut3,cia4)
    let ncomic22 = await newComic(comic22,aut4,cia4)
    let ncomic23 = await newComic(comic23,aut5,cia4)
    let ncomic24 = await newComic(comic24,aut6,cia4)
    let ncomic25 = await newComic(comic25,aut1,cia3)
    let ncomic26 = await newComic(comic26,aut2,cia3)
    let ncomic27 = await newComic(comic27,aut3,cia3)
    let ncomic28 = await newComic(comic28,aut4,cia1)
    let ncomic29 = await newComic(comic29,aut5,cia1)
    let ncomic30 = await newComic(comic30,aut6,cia1)
    let ncomic31 = await newComic(comic31,aut1,cia1)
    let ncomic32 = await newComic(comic32,aut2,cia1)
    let ncomic33 = await newComic(comic33,aut3,cia1)
}

data()