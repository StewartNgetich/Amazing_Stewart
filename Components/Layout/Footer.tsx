import Container from "../Ui/Container"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-white font-semibold mb-2">Stewart 😍</h3>
            <p className="text-sm max-w-sm">
              Designer, editor, and storyteller crafting digital experiences
              that connect and convert.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span className="hover:text-white cursor-pointer">Behance</span>
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
          </div>
        </div>

        <p className="text-xs mt-10 opacity-60">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
