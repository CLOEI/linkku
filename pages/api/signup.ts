import type { NextApiRequest, NextApiResponse } from 'next'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from "../../firebase"
import { v4 } from "uuid"
import bcrypt from "bcrypt"

type FormItem = {
  username: string,
  password: string,
}

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  const obj = JSON.parse(req.body) as FormItem

  const authRef = collection(db, "auth");
  const q = query(authRef, where("username", "==", obj.username.toLowerCase()))
  const queryAuth = await getDocs(q)
  
  if (queryAuth.size === 0) {
    try {
      const docRef = await addDoc(collection(db, "auth"), {
        id : v4(),
        username : obj.username.toLowerCase(),
        password : await bcrypt.hash(obj.password, 10)
      })
      res.status(200).json({ message: `Berhasil!, id : ${docRef.id}` })
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: "Terjadi error"})
    }
  }
  else {
    res.status(400).json({ message: `Nama sudah didaftarkan.` })
  }
}