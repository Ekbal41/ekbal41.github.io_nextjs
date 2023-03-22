import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(req, res) {
  const { id } = req.query
  if (id !== "4356786") {
    return res.status(401).json({ message: 'Not authorized' })
  }
  if (req.method === 'POST') {
    const project = await prisma.project.create({
      data: req.body,
    })
    res.status(200).json(project)
  }
  if (req.method === 'GET') {
    const projects = await prisma.project.findMany()
    const reversedProjects = projects.reverse()
    
    res.status(200).json(reversedProjects)
  }
  if (req.method === 'DELETE') {
    const projectId = req.body.projectId
    console.log(projectId)
    const project = await prisma.project.delete({
      where: { id:projectId },
    })
    res.status(200).json({ message: 'Project deleted'})
  }

}
