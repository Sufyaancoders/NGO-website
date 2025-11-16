import PropTypes from "prop-types";
import { Card, CardContent } from "../ui/card";

export const MovementCard = ({ icon, title, subtitle }) => {
  const Icon = icon;
  return (
    <Card className="group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-2 sm:p-3 lg:p-4 text-center">
        <div className="mb-6 flex justify-center">
          <Icon className="h-14 w-14 stroke-[1.5] text-[#f0b429]" />
        </div>
        <h3 className="mb-2 text-xl font-bold uppercase tracking-tight text-heading">
          {title}
        </h3>
        <p className="mb-4 text-sm font-semibold uppercase tracking-tight text-heading">
          {subtitle}
        </p>
        <a
          href="#"
          className="inline-block text-sm font-bold uppercase tracking-wider text-blue-800 transition-colors hover:text-blue-600"
        >
          Read More
        </a>
      </CardContent>
    </Card>
  );
};

MovementCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
