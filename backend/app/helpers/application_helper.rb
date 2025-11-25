module ApplicationHelper
  def flash_classes(type)
    case type.to_sym
    when :notice, :success
      "bg-green-50 border-green-200 text-green-800"
    when :alert, :error
      "bg-red-50 border-red-200 text-red-800"
    when :warning
      "bg-yellow-50 border-yellow-200 text-yellow-800"
    else
      "bg-blue-50 border-blue-200 text-blue-800"
    end
  end
end
