export default class Handler {
  constructor() {
    this.handler = this.handler.bind(this);
    this.post = this.post.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
  }
  handler(req: any, res: any) {
    switch (req.method) {
      case "GET":
        return this.get(req, res);
      case "POST":
        return this.post(req, res);
      case "PUT":
        return this.put(req, res);
      case "DELETE":
        return this.delete(req, res);
      default:
        res.status(405).json({ message: "Method not allowed" });
    }
  }
  get(req: any, res: any) {
    return res.status(405).json({ message: "Method not allowed" });
  }
  post(req: any, res: any) {
    return res.status(405).json({ message: "Method not allowed" });
  }
  put(req: any, res: any) {
    return res.status(405).json({ message: "Method not allowed" });
  }
  delete(req: any, res: any) {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
