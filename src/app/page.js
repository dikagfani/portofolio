import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="p-10 flex gap-4 items-start">
      <Button>KIRIM</Button>
      <Button variant="secondary">KIRIM</Button>
      <Button variant="dark">KIRIM</Button>
      <Badge color="purple" withDot>Available for new projects</Badge>
      <Card color="mint" className="w-32 h-32 flex items-center justify-center">
  <span className="font-bold">HTML5</span>
</Card>
    </main>
  )
}