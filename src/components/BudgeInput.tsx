import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";

export default function BudgetInput({ value, onChange }: { value: string; onChange: (val: string) => void }) {
        const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
      <label className="text-sm text-muted-foreground">{t("plan.budget")}</label>
      <div className="flex items-center gap-1 text-2xl font-bold">
        <span className="text-black dark:text-white">$</span>
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-24 text-center text-2xl font-bold border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
    </div>
  );
}
