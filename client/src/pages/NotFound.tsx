/* Quiet Signal reminder: warm paper, ink, oxide lime, editorial asymmetry, signal rails, calm motion. */
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return <div className="not-found-page"><div className="not-found-number">404</div><div><p className="eyebrow">SIGNAL LOST / 404</p><h1>This page took<br /><em>a wrong turn.</em></h1><p>Nothing is broken in the fictional workspace. Let’s get you back to a clear view.</p><Link href="/" className="text-link">Return home <ArrowUpRight size={16} /></Link></div><Link href="/" className="back-link"><ArrowLeft size={15} /> Onyx Global home</Link></div>;
}
