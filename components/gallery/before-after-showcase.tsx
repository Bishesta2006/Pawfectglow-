"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Transformation = {
  before: string;
  after: string;
  petName: string;
  breed: string;
  highlight: string;
};

type BeforeAfterShowcaseProps = {
  transformations: Transformation[];
};

export function BeforeAfterShowcase({
  transformations,
}: BeforeAfterShowcaseProps) {
  const [activePet, setActivePet] = useState(transformations[0]?.petName ?? "");
  const [compareValue, setCompareValue] = useState(50);
  const [isDraggingCompare, setIsDraggingCompare] = useState(false);

  const updateCompareFromPointer = (
    clientX: number,
    container: HTMLDivElement,
  ) => {
    const bounds = container.getBoundingClientRect();
    const relativeX = clientX - bounds.left;
    const nextValue = Math.min(
      100,
      Math.max(0, (relativeX / bounds.width) * 100),
    );
    setCompareValue(Math.round(nextValue));
  };

  const activeTransformation = useMemo(
    () =>
      transformations.find((item) => item.petName === activePet) ??
      transformations[0],
    [activePet, transformations],
  );

  if (!activeTransformation) {
    return null;
  }

  return (
    <Tabs
      value={activeTransformation.petName}
      onValueChange={(value) => {
        setActivePet(value);
        setCompareValue(50);
      }}
      className="w-full"
    >
      <div className="rounded-2xl border border-border bg-gradient-to-br from-card via-card to-muted/50 p-5 shadow-lg md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-1 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              Signature Transformations
            </p>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Before → After Glow-Up
            </h2>
            <p className="mt-1 text-sm text-muted-foreground md:text-base">
              Pick a pet and drag on the photo or slider to reveal the final
              look.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background/80 p-1">
            <TabsList className="h-auto flex-wrap rounded-lg bg-transparent p-0">
              {transformations.map((item) => (
                <TabsTrigger
                  key={item.petName}
                  value={item.petName}
                  className="rounded-md px-3 py-1.5"
                >
                  {item.petName}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
      </div>

      {transformations.map((item) => {
        const sliderPosition = `${compareValue}%`;

        return (
          <TabsContent key={item.petName} value={item.petName} className="mt-6">
            <div className="grid gap-5 rounded-2xl border border-border bg-card p-4 shadow-xl md:p-6 lg:grid-cols-[1.4fr_1fr]">
              <div className="relative overflow-hidden rounded-xl border border-border">
                <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                <div
                  className={`relative z-10 aspect-[16/10] w-full touch-none ${
                    isDraggingCompare ? "cursor-grabbing" : "cursor-ew-resize"
                  }`}
                  onPointerDown={(event) => {
                    setIsDraggingCompare(true);
                    event.currentTarget.setPointerCapture(event.pointerId);
                    updateCompareFromPointer(
                      event.clientX,
                      event.currentTarget as HTMLDivElement,
                    );
                  }}
                  onPointerMove={(event) => {
                    if (!isDraggingCompare) return;
                    updateCompareFromPointer(
                      event.clientX,
                      event.currentTarget as HTMLDivElement,
                    );
                  }}
                  onPointerUp={(event) => {
                    setIsDraggingCompare(false);
                    if (
                      event.currentTarget.hasPointerCapture(event.pointerId)
                    ) {
                      event.currentTarget.releasePointerCapture(
                        event.pointerId,
                      );
                    }
                  }}
                  onPointerCancel={(event) => {
                    setIsDraggingCompare(false);
                    if (
                      event.currentTarget.hasPointerCapture(event.pointerId)
                    ) {
                      event.currentTarget.releasePointerCapture(
                        event.pointerId,
                      );
                    }
                  }}
                >
                  <Image
                    src={item.before}
                    alt={`${item.petName} before grooming`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 900px"
                  />

                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden"
                    style={{ width: sliderPosition }}
                  >
                    <div className="relative h-full w-full min-w-full">
                      <Image
                        src={item.after}
                        alt={`${item.petName} after grooming`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 900px"
                      />
                    </div>
                  </div>

                  <div
                    className="absolute inset-y-0 z-10 w-0.5 bg-card"
                    style={{ left: sliderPosition }}
                  >
                    <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-border bg-background px-2 py-1 text-[10px] font-bold text-foreground shadow-sm">
                      <span>←</span>
                      <span>→</span>
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 rounded-full bg-foreground/80 px-3 py-1 text-xs font-bold text-card">
                    Before
                  </span>
                  <span className="absolute top-3 right-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    After
                  </span>
                </div>

                <div className="bg-background px-4 py-3">
                  <div className="mb-2 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                    <span>Reveal Level</span>
                    <span>{compareValue}%</span>
                  </div>
                  <input
                    aria-label={`Before and after slider for ${item.petName}`}
                    type="range"
                    min={0}
                    max={100}
                    value={compareValue}
                    onChange={(event) =>
                      setCompareValue(Number(event.target.value))
                    }
                    className="accent-primary w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-xl border border-border bg-muted/40 p-4">
                <div>
                  <p className="text-xl font-bold text-foreground">
                    {item.petName} · {item.breed}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.highlight}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setCompareValue(0)}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground hover:bg-muted"
                    >
                      Full Before
                    </button>
                    <button
                      type="button"
                      onClick={() => setCompareValue(50)}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground hover:bg-muted"
                    >
                      50 / 50
                    </button>
                    <button
                      type="button"
                      onClick={() => setCompareValue(100)}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground hover:bg-muted"
                    >
                      Full After
                    </button>
                  </div>
                </div>

                <div className="mt-5 rounded-lg border border-border bg-card p-3 text-sm text-muted-foreground">
                  Each makeover focuses on coat health, comfortable handling,
                  and a style that suits your pet’s personality.
                </div>
              </div>
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
