export default function ContactPage(){
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>
      <p className="text-white/70">문의 폼은 다음 스텝에서 연결합니다.</p>
      <a className="inline-block mt-4 px-4 py-2 rounded-xl bg-[var(--color-accent)] text-black" href="mailto:hello@snstrend.ai">메일 보내기</a>
    </div>
  );
}
