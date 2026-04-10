# ============================================================
#  Makefile for the LaTeX report
#  Run `make` in this directory to build report.pdf
# ============================================================

LATEXMK   := /Library/TeX/texbin/latexmk
PDFLATEX  := /Library/TeX/texbin/pdflatex
TEX       := main.tex
PDF       := main.pdf

.PHONY: all clean distclean

all: $(PDF)

# Use latexmk if available (handles multiple passes automatically)
$(PDF): $(TEX)
	@if [ -f "$(LATEXMK)" ]; then \
	  $(LATEXMK) -pdf -pdflatex="$(PDFLATEX)" -interaction=nonstopmode $(TEX); \
	else \
	  $(PDFLATEX) -interaction=nonstopmode $(TEX) && \
	  $(PDFLATEX) -interaction=nonstopmode $(TEX) && \
	  $(PDFLATEX) -interaction=nonstopmode $(TEX); \
	fi

clean:
	@rm -f *.aux *.log *.toc *.out *.lot *.lof *.fls *.fdb_latexmk *.synctex.gz

distclean: clean
	@rm -f $(PDF)
